import { VideoMetadata } from '../types';

export const extractVideoId = (url: string): string | null => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
};

// Mock function to simulate fetching data from a backend
export const fetchVideoMetadata = async (videoId: string): Promise<VideoMetadata> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: videoId,
        title: "Lofi Hip Hop Radio - Beats to Relax/Study to",
        author: "Lofi Girl",
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        duration: "Live",
        views: "54M views"
      });
    }, 1500); // Simulate network delay
  });
};

export const simulateDownload = (filename: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000); // Simulate download processing time
  });
};