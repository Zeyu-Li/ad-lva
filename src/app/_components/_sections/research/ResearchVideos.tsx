"use client";

import { useTranslations } from "next-intl";
import VideoPlayer, {
  type VideoPlayerData,
} from "~/app/_components/common/VideoPlayer";

// YouTube video data structure with translation keys
interface VideoData {
  id: string;
  titleKey: string;
  descriptionKey: string;
  youtubeId: string;
}

export default function ResearchVideos() {
  const t = useTranslations("ResearchVideos");

  // Sample video data - replace with your actual videos
  const researchVideos: VideoData[] = [
    {
      id: "1",
      titleKey: "video1_title",
      descriptionKey: "video1_description",
      youtubeId: "u--Ee-KM20Q", // Replace with actual YouTube video ID
    },
    {
      id: "2",
      titleKey: "video2_title",
      descriptionKey: "video2_description",
      youtubeId: "EyjNyfzjClE", // Replace with actual YouTube video ID
    },
    {
      id: "3",
      titleKey: "video3_title",
      descriptionKey: "video3_description",
      youtubeId: "b5XTVHtkox4", // Replace with actual YouTube video ID
    },
    {
      id: "4",
      titleKey: "video4_title",
      descriptionKey: "video4_description",
      youtubeId: "TaUGQQM09no", // Replace with actual YouTube video ID
    },
  ];

  // Transform the data with localized strings for the generic VideoPlayer
  const localizedVideos: VideoPlayerData[] = researchVideos.map((video) => ({
    id: video.id,
    title: t(video.titleKey),
    description: t(video.descriptionKey),
    youtubeId: video.youtubeId,
  }));

  return <VideoPlayer videos={localizedVideos} />;
}
