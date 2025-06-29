"use client";

import AddVideoModal from "@/components/courses/id/AddVideoModal";
import VideoList from "@/components/courses/id/VideoList";
import VideoListSkeleton from '@/components/courses/id/VideoList/skeleton';
import VideoPlayer from "@/components/courses/id/VideoPlayer";
import { useVideosManager } from "@/hooks/useVideoManager";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const courseId = Number(params?.id);

  const {
    isLoading,
    isError,
    videos,
    selectedVideo,
    editingVideoId,
    editTitle,
    editUrl,
    isAddModalOpen,
    newVideoTitle,
    newVideoUrl,
    setEditTitle,
    setEditUrl,
    setIsAddModalOpen,
    setNewVideoTitle,
    setNewVideoUrl,
    handleSelect,
    handleDelete,
    handleAddVideo,
    handleEdit,
    handleSaveEdit,
    setEditingVideoId,
  } = useVideosManager(courseId);

  if (isError) {
    return <div className="text-red-500 p-6">Erro ao carregar os vídeos.</div>;
  }

  return (
    <div className="p-6 mx-auto w-full h-[100%] flex flex-col bg-[rgba(95,0,191,0.1)]">
      <h1 className="text-2xl font-bold mb-4 w-full text-[var(--text)]">Vídeos do Curso {courseId}</h1>

      <div className="flex flex-col lg:flex-row gap-4 w-full flex-grow ">
        <div className="w-full lg:w-3/5 flex flex-col bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] rounded shadow p-4 relative h-[90%] max-h-[395px] lg:max-h-[600px]">
          <h2 className="text-xl font-semibold mb-4 text-[var(--text)]">Lista de Vídeos</h2>
          {isLoading ? (
            <VideoListSkeleton />
          ) : (
            <VideoList
              videos={videos}
              selectedId={selectedVideo?.id ?? null}
              editingId={editingVideoId}
              editTitle={editTitle}
              editUrl={editUrl}
              onSelect={handleSelect}
              onEdit={handleEdit}
              onSave={handleSaveEdit}
              onCancel={() => setEditingVideoId(null)}
              onChangeEditTitle={setEditTitle}
              onChangeEditUrl={setEditUrl}
              onDelete={handleDelete}
            />
          )}
        </div>

        <div className="w-full lg:w-3/5 aspect-video bg-[var(--background)] rounded shadow-lg overflow-hidden">
          <VideoPlayer video={selectedVideo} />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setIsAddModalOpen((prev) => !prev)}
          className="bg-[var(--primary)] text-[var(--text-white)] px-4 py-2 rounded transition shadow-lg cursor-pointer mt-4"
        >
          Adicionar Vídeo
        </button>
      </div>

      <AddVideoModal
        isOpen={isAddModalOpen}
        onClose={setIsAddModalOpen}
        onAdd={handleAddVideo}
        title={newVideoTitle}
        url={newVideoUrl}
        setTitle={setNewVideoTitle}
        setUrl={setNewVideoUrl}
      />
    </div>
  );
}
