import React from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface VideoControlsProps {
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onVolumeChange: (value: number) => void;
  onSeek: (value: number) => void;
}

const VideoControls: React.FC<VideoControlsProps> = ({
  isPlaying,
  volume,
  currentTime,
  duration,
  onPlayPause,
  onVolumeChange,
  onSeek
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
      <div className="flex items-center gap-4">
        <button
          onClick={onPlayPause}
          className="p-2 hover:bg-white/20 rounded-full transition"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className="flex-1">
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => onSeek(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2">
            {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            className="w-20"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
