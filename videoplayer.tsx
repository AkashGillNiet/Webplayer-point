import React, { useRef } from 'react';
import { useVideoControls } from '../hooks/useVideoControls';
import VideoControls from './VideoControls';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    isPlaying,
    volume,
    currentTime,
    duration,
    togglePlay,
    handleVolumeChange,
    handleTimeUpdate,
    handleSeek
  } = useVideoControls(videoRef);

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full"
        onTimeUpdate={handleTimeUpdate}
        src={url}
      >
        Your browser does not support the video tag.
      </video>
      
      <VideoControls
        isPlaying={isPlaying}
        volume={volume}
        currentTime={currentTime}
        duration={duration}
        onPlayPause={togglePlay}
        onVolumeChange={handleVolumeChange}
        onSeek={handleSeek}
      />
    </div>
  );
}

export default VideoPlayer;
