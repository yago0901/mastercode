"use client";

import { IVideo } from "@/components/mocks/coursesMock/tipes";
import { useState } from "react";

export function extractYouTubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

export function isYouTubeUrl(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

export default function VideoPlayer({ video }: { video: IVideo | null }) {
  const [isLoading, setIsLoading] = useState(true);

  if (!video) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white">Selecione um vídeo para assistir</p>
      </div>
    );
  }
  const onLoad = () => setIsLoading(false);

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <p className="text-white">Carregando vídeo...</p>
        </div>
      )}

      {isYouTubeUrl(video.url) ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${extractYouTubeId(video.url)}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={onLoad}
        />
      ) : (
        <div className="w-full aspect-video bg-black rounded overflow-hidden">
          <video controls autoPlay src={video.url} className="w-full h-full object-contain" onLoadedData={onLoad} />
        </div>
      )}
    </div>
  );
}
