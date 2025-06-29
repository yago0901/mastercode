import { IVideo } from '@/components/mocks/coursesMock/tipes';

export const getVideoIdNumber = (id: string) =>
  parseInt(id.replace(/[^\d]/g, ""), 10);

export const updateVideo = (
  videos: IVideo[],
  videoId: number,
  title: string,
  url: string
): IVideo[] =>
  videos.map((v) =>
    getVideoIdNumber(v.id) === videoId ? { ...v, name: title, url } : v
  );

export const deleteVideo = (videos: IVideo[], id: number): IVideo[] =>
  videos.filter((v) => getVideoIdNumber(v.id) !== id);

export const addVideo = (
  videos: IVideo[],
  title: string,
  url: string
): IVideo[] => {
  const newIdNumber =
    videos.length > 0
      ? Math.max(...videos.map((v) => getVideoIdNumber(v.id))) + 1
      : 1;

  const newVideo: IVideo = {
    id: `v${newIdNumber}`,
    name: title.trim(),
    url: url.trim(),
    description: "",
  };

  return [...videos, newVideo];
};
