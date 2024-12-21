import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [streamUrl, setStreamUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Network Stream Player</h1>
        
        {!isPlaying ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="streamUrl" className="block text-sm font-medium mb-2">
                Enter Stream URL
              </label>
              <input
                type="url"
                id="streamUrl"
                value={streamUrl}
                onChange={(e) => setStreamUrl(e.target.value)}
                placeholder="rtsp://, http://, or https:// stream URL"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              Play Stream
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <VideoPlayer url={streamUrl} />
            <button
              onClick={() => setIsPlaying(false)}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
            >
              Enter New URL
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
