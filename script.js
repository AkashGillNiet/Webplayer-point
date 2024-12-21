document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('my-video');
    const videoSrc = 'http://z88.ubtvfans.com/live/rx3/1173/4a322e3c6d5c5e2f3ed5dede47a570ed/index.m3u8'; // Replace with your stream URL

    // Automatically set the source and play the video
    videoElement.getElementsByTagName('source')[0].src = videoSrc;
    videoElement.load();
    videoElement.play();

    // DRM handling can be complex and depends on the specific DRM system you're using.
    // For simplicity, this example assumes you're using a DRM-enabled stream URL.
});
