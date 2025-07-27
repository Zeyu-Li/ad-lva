"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// Video data structure for the generic component
export interface VideoPlayerData {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
}

interface VideoPlayerProps {
  videos: VideoPlayerData[];
  className?: string;
}

export default function VideoPlayer({
  videos,
  className = "",
}: VideoPlayerProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videos || videos.length === 0) return null;

  const currentVideo = videos[currentVideoIndex];

  const handlePrevious = () => {
    setCurrentVideoIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentVideoIndex(index);
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  if (!currentVideo) return null;

  return (
    <div className={`w-full py-8 ${className}`}>
      {/* Main Video Player */}
      <div className="mb-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
            {!isPlaying ? (
              // Video Thumbnail with Play Button
              <div className="relative h-full w-full">
                <img
                  src={`https://img.youtube.com/vi/${currentVideo.youtubeId}/maxresdefault.jpg`}
                  alt={currentVideo.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button
                    onClick={handlePlayClick}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-red-700"
                    aria-label="Play video"
                  >
                    <Play className="ml-1 h-8 w-8" fill="currentColor" />
                  </button>
                </div>
              </div>
            ) : (
              // YouTube iframe
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
              />
            )}
          </div>

          {/* Video Info */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {currentVideo.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {currentVideo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mb-6 flex items-center justify-center space-x-4">
        <button
          onClick={handlePrevious}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Previous video"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </button>

        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {currentVideoIndex + 1} of {videos.length}
        </span>

        <button
          onClick={handleNext}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Next video"
        >
          <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => handleThumbnailClick(index)}
              className={`group relative aspect-video overflow-hidden rounded-lg transition-all duration-200 ${
                index === currentVideoIndex
                  ? "ring-4 ring-blue-500 ring-offset-2"
                  : "hover:ring-2 hover:ring-blue-300 hover:ring-offset-1"
              }`}
            >
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <Play className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <p className="line-clamp-2 text-xs font-medium text-white">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-200 ${
              index === currentVideoIndex
                ? "bg-blue-600 dark:bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
