import { useState, useEffect } from "react";
import { addVideo, deleteVideo, getVideoIdNumber, updateVideo } from "./util";
import { useQuery } from "@tanstack/react-query";
import { getCourseVideos } from "@/services/api/courseVideosApi";
import { IVideo } from "@/components/mocks/coursesMock/tipes";
import { useRef } from "react";

export function useVideosManager(courseId: number) {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["videos", courseId],
    queryFn: () => getCourseVideos(courseId),
  });

  const [videos, setVideos] = useState<IVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<IVideo | null>(null);
  const [editingVideoId, setEditingVideoId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");

  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current && data.length > 0) {
      setVideos(data);
      setSelectedVideo(data[0] ?? null);
      isInitialized.current = true;
    }
  }, [data]);

  const handleSelect = (video: IVideo) => {
    setSelectedVideo(video);
    setEditingVideoId(null);
  };

  const handleDelete = (id: number) => {
    setVideos((prev) => deleteVideo(prev, id));
    if (selectedVideo && getVideoIdNumber(selectedVideo.id) === id) {
      setSelectedVideo(null);
    }
  };

  const handleAddVideo = () => {
    if (!newVideoTitle.trim() || !newVideoUrl.trim()) return;
    setVideos((prev) => addVideo(prev, newVideoTitle, newVideoUrl));
    setIsAddModalOpen(false);
  };

  const handleEdit = (video: IVideo) => {
    const idNum = getVideoIdNumber(video.id);
    setEditingVideoId(idNum);
    setEditTitle(video.name);
    setEditUrl(video.url);
  };

  const handleSaveEdit = () => {
    if (editingVideoId === null) return;
    setVideos((prev) => updateVideo(prev, editingVideoId, editTitle, editUrl));
    if (selectedVideo && getVideoIdNumber(selectedVideo.id) === editingVideoId) {
      setSelectedVideo({ ...selectedVideo, name: editTitle, url: editUrl });
    }
    setEditingVideoId(null);
  };

  return {
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
    setSelectedVideo,
  };
}
