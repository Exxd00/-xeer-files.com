'use client';

import { useCallback } from 'react';
import { useDropzone, type FileRejection } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Upload,
  FileText,
  X,
  AlertCircle,
  ChevronUp,
  ChevronDown,
  GripVertical,
} from 'lucide-react';
import { useAppStore } from '@/stores/app-store';
import { getTranslations } from '@/i18n';
import { getEffectiveLimits } from '@/config/plans';
import type { UploadedFile } from '@/types';

interface FileDropzoneProps {
  acceptedFormats: string[];
  maxFiles?: number;
  onFilesAdded?: (files: UploadedFile[]) => void;
}

function formatFileSize(bytes: number) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
}

interface SortableFileItemProps {
  file: UploadedFile;
  index: number;
  totalFiles: number;
  onMove: (index: number, direction: 'up' | 'down') => void;
  onRemove: (id: string) => void;
}

function SortableFileItem({ file, index, totalFiles, onMove, onRemove }: SortableFileItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: file.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isDragging ? 0.5 : 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
      className="file-item"
    >
      {/* Drag Handle */}
      {totalFiles > 1 && (
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-muted-foreground touch-none"
        >
          <GripVertical className="w-5 h-5" />
        </div>
      )}

      {/* File Icon */}
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <FileText className="w-5 h-5 text-primary" />
      </div>

      {/* File Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{file.name}</p>
        <p className="text-xs text-muted-foreground">
          {formatFileSize(file.size)}
        </p>
      </div>

      {/* Status */}
      {file.status === 'error' && (
        <div className="flex items-center gap-1 text-destructive">
          <AlertCircle className="w-4 h-4" />
          <span className="text-xs">{file.error}</span>
        </div>
      )}

      {/* Reorder Buttons */}
      {totalFiles > 1 && (
        <div className="flex flex-col gap-0.5">
          <button
            type="button"
            className="p-1 rounded hover:bg-muted disabled:opacity-30"
            onClick={() => onMove(index, 'up')}
            disabled={index === 0}
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="p-1 rounded hover:bg-muted disabled:opacity-30"
            onClick={() => onMove(index, 'down')}
            disabled={index === totalFiles - 1}
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Remove Button */}
      <button
        type="button"
        className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
        onClick={() => onRemove(file.id)}
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  );
}

export function FileDropzone({
  acceptedFormats,
  maxFiles = 100,
  onFilesAdded,
}: FileDropzoneProps) {
  const { locale, files, addFiles, removeFile, reorderFiles } = useAppStore();
  const t = getTranslations(locale);

  const limits = getEffectiveLimits();
  const maxSize = limits.maxFileSize * 1024 * 1024; // Convert to bytes

  // PointerSensor covers mouse, touch and pen via the unified Pointer Events API.
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } })
  );

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const newFiles: UploadedFile[] = acceptedFiles.map((file) => ({
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadProgress: 100,
        status: 'ready',
      }));

      const rejectedUploaded: UploadedFile[] = rejectedFiles.map(({ file, errors }) => ({
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadProgress: 0,
        status: 'error',
        error: errors[0]?.message || 'File rejected',
      }));

      const combined = [...newFiles, ...rejectedUploaded];
      if (combined.length > 0) {
        addFiles(combined);
        onFilesAdded?.(newFiles);
      }
    },
    [addFiles, onFilesAdded]
  );

  const remainingSlots = maxFiles - files.length;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFormats.reduce((acc, format) => {
      if (format === '.pdf') acc['application/pdf'] = ['.pdf'];
      if (format === '.doc') acc['application/msword'] = ['.doc'];
      if (format === '.docx')
        acc['application/vnd.openxmlformats-officedocument.wordprocessingml.document'] = ['.docx'];
      if (format === '.xls') acc['application/vnd.ms-excel'] = ['.xls'];
      if (format === '.xlsx')
        acc['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'] = ['.xlsx'];
      if (format === '.ppt') acc['application/vnd.ms-powerpoint'] = ['.ppt'];
      if (format === '.pptx')
        acc['application/vnd.openxmlformats-officedocument.presentationml.presentation'] = ['.pptx'];
      if (['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'].includes(format))
        acc['image/*'] = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
      return acc;
    }, {} as Record<string, string[]>),
    maxSize,
    maxFiles: remainingSlots,
    disabled: remainingSlots <= 0,
  });

  const moveFile = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < files.length) {
      reorderFiles(index, newIndex);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const fromIndex = files.findIndex((f) => f.id === active.id);
    const toIndex = files.findIndex((f) => f.id === over.id);
    if (fromIndex !== -1 && toIndex !== -1) {
      reorderFiles(fromIndex, toIndex);
    }
  };

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            animate={isDragActive ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4"
          >
            <Upload className="w-8 h-8 text-primary" />
          </motion.div>
          <h3 className="text-lg font-semibold mb-2">{t.upload.dropzone}</h3>
          <p className="text-sm text-muted-foreground mb-4">{t.upload.or}</p>
          <button
            type="button"
            className="px-6 py-2.5 rounded-xl btn-primary text-sm"
          >
            {t.upload.selectFiles}
          </button>
          <p className="text-xs text-muted-foreground mt-4">
            {t.upload.maxSize} {limits.maxFileSize}MB
          </p>
          <p className="text-xs text-muted-foreground">
            {t.upload.formats} {acceptedFormats.join(', ')}
          </p>
        </div>
      </div>

      {/* File List */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                {files.length} file{files.length !== 1 ? 's' : ''} selected
              </span>
              <button
                type="button"
                className="text-sm text-destructive hover:underline"
                onClick={() => files.forEach((f) => removeFile(f.id))}
              >
                {t.upload.removeAll}
              </button>
            </div>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={files.map((f) => f.id)} strategy={verticalListSortingStrategy}>
                {files.map((file, index) => (
                  <SortableFileItem
                    key={file.id}
                    file={file}
                    index={index}
                    totalFiles={files.length}
                    onMove={moveFile}
                    onRemove={removeFile}
                  />
                ))}
              </SortableContext>
            </DndContext>

            {/* Add More */}
            <div {...getRootProps()} className="cursor-pointer">
              <input {...getInputProps()} />
              <div className="file-item justify-center border-dashed hover:border-primary/50">
                <Upload className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {t.upload.addMore}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
