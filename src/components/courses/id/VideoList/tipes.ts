import { IVideo } from '@/components/mocks/coursesMock/tipes';

export interface VideoListProps {
  videos: IVideo[];
  selectedId: string | null;
  editingId: number | null;
  editTitle: string;
  editUrl: string;
  onSelect: (v: IVideo) => void;
  onEdit: (v: IVideo) => void;
  onSave: () => void;
  onCancel: () => void;
  onChangeEditTitle: (val: string) => void;
  onChangeEditUrl: (val: string) => void;
  onDelete: (id: number) => void;
}