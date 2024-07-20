import YouTube from 'react-youtube';

export default function YoutubeMusic() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // You can customize player parameters here
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        event.target.playVideo();
    };
    
    return (
        <div>
            <h2>YouTube Music Player</h2>
            <YouTube videoId="YOUR_VIDEO_ID" opts={opts} onReady={onReady} />
        </div>
    )
}