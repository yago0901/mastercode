'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

type Video = {
  id: number;
  title: string;
  url: string; // URL do vídeo (YouTube, mp4, etc)
};

export default function Page() {
  const params = useParams();
  const courseId = params?.id;

  // Estado dos vídeos - inicial com 3 vídeos exemplo
  const [videos, setVideos] = useState<Video[]>([
    { id: 1, title: 'Aula 1 - Introdução', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 2, title: 'Aula 2 - Fundamentos', url: 'https://www.w3schools.com/html/movie.mp4' },
    { id: 3, title: 'Aula 3 - Projeto Final', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ]);

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [editingVideoId, setEditingVideoId] = useState<number | null>(null);
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editUrl, setEditUrl] = useState('');

  const handleSelect = (video: Video) => {
    setSelectedVideo(video);
    setEditingVideoId(null);
  };

  const handleEdit = (video: Video) => {
    setEditingVideoId(video.id);
    setEditTitle(video.title);
    setEditUrl(video.url);
  };

  const handleSaveEdit = (id: number) => {
    setVideos(videos.map(v => v.id === id ? { ...v, title: editTitle, url: editUrl } : v));
    setEditingVideoId(null);
    // Atualiza o vídeo selecionado caso esteja editando ele
    if (selectedVideo?.id === id) {
      setSelectedVideo({ id, title: editTitle, url: editUrl });
    }
  };

  const handleCancelEdit = () => {
    setEditingVideoId(null);
  };

  const handleDelete = (id: number) => {
    setVideos(videos.filter(v => v.id !== id));
    if (selectedVideo?.id === id) {
      setSelectedVideo(null);
    }
  };

  const handleAddVideo = () => {
    if (!newVideoTitle.trim() || !newVideoUrl.trim()) return;
    const newVideo: Video = {
      id: videos.length ? Math.max(...videos.map(v => v.id)) + 1 : 1,
      title: newVideoTitle.trim(),
      url: newVideoUrl.trim(),
    };
    setVideos([...videos, newVideo]);
    setNewVideoTitle('');
    setNewVideoUrl('');
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Vídeos do Curso {courseId}</h1>

      <div className="flex gap-8 flex-col lg:flex-row">

        <div className="w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Lista de Vídeos</h2>
          <div className="mb-6 p-4 border rounded shadow-sm">
            <input
              type="text"
              placeholder="Título do vídeo"
              value={newVideoTitle}
              onChange={e => setNewVideoTitle(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="URL do vídeo"
              value={newVideoUrl}
              onChange={e => setNewVideoUrl(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded"
            />
            <button
              onClick={handleAddVideo}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Adicionar Vídeo
            </button>
          </div>

          <ul className="space-y-3 max-h-[400px] overflow-auto">
            {videos.length === 0 && (
              <li className="text-gray-500">Nenhum vídeo cadastrado.</li>
            )}
            {videos.map(video => (
              <li key={video.id} className="border rounded p-3 flex flex-col gap-2 bg-white shadow-sm">
                {editingVideoId === video.id ? (
                  <>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={e => setEditTitle(e.target.value)}
                      className="w-full px-2 py-1 border rounded"
                    />
                    <input
                      type="text"
                      value={editUrl}
                      onChange={e => setEditUrl(e.target.value)}
                      className="w-full px-2 py-1 border rounded"
                    />
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => handleSaveEdit(video.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                      >
                        Salvar
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                      >
                        Cancelar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => handleSelect(video)}
                      className="cursor-pointer font-semibold text-primary hover:underline"
                    >
                      {video.title}
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => handleEdit(video)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(video.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Excluir
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-2/3 bg-black rounded shadow-lg aspect-video flex items-center justify-center">
          {selectedVideo ? (
            <video controls src={selectedVideo.url} className="w-full h-full rounded" />
          ) : (
            <p className="text-white">Selecione um vídeo para assistir</p>
          )}
        </div>
      </div>
    </div>
  );
}
