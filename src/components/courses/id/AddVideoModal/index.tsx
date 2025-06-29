import Modal from '@/components/ui/Modal';

interface Props {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  onAdd: () => void;
  title: string;
  url: string;
  setTitle: (value: string) => void;
  setUrl: (value: string) => void;
}

export default function AddVideoModal({
  isOpen,
  onClose,
  onAdd,
  title,
  url,
  setTitle,
  setUrl,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={() => onClose(false)}>
      <h2 className="text-xl font-bold mb-4">Adicionar Novo Vídeo</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded"
        placeholder="Título"
      />
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
        placeholder="URL"
      />
      <div className="flex justify-end gap-2">
        <button
          onClick={() => onClose(false)}
          className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
        >
          Cancelar
        </button>
        <button
          onClick={onAdd}
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          Adicionar
        </button>
      </div>
    </Modal>
  );
}
