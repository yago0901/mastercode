import { VideoListProps } from './tipes';

export default function VideoList({
  videos,
  editingId,
  editTitle,
  editUrl,
  onSelect,
  onEdit,
  onSave,
  onCancel,
  onChangeEditTitle,
  onChangeEditUrl,
  onDelete,
}: VideoListProps) {
  return (
    <ul className="flex flex-col gap-4 overflow-y-auto pr-2 h-full">
      {videos.length === 0 && (
        <li className="text-[var(--text)]">Nenhum vídeo cadastrado.</li>
      )}
      {videos.map((video) => {
        const vidNum = parseInt(video.id.replace(/[^\d]/g, ""));
        const isEditing = editingId === vidNum;

        return (
          <li
            key={video.id}
            className="bg-[var(--card-bg-rgba)] rounded-xl shadow-md p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg transition text-[var(--text)]"
            onClick={() => onSelect(video)}
          >
            {isEditing ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => onChangeEditTitle(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="mb-2 px-2 py-1 border rounded"
                  autoFocus
                />
                <input
                  value={editUrl}
                  onChange={(e) => onChangeEditUrl(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="mb-2 px-2 py-1 border rounded"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSave();
                    }}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCancel();
                    }}
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="font-bold text-primary text-lg truncate">
                  {video.name}
                </div>
                <div className="text-sm text-[var(--text)] truncate">
                  {video.url}
                </div>
                <div className="mt-4 flex gap-2 justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(video);
                    }}
                    className="bg-[var(--warning)] text-[var(--text)] px-3 py-1 rounded font-bold"
                  >
                    Editar
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(vidNum);
                    }}
                    className="bg-[var(--danger)] text-[var(--text)] px-3 py-1 rounded font-bold"
                  >
                    Excluir
                  </button>
                </div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
