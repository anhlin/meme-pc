import YouTube, {Options} from 'react-youtube'
import {useState, useEffect} from 'react'

interface YoutubeEmbedProps {
    videoId: string
    start?: number
    end?: number
}

let playerRef: any = null

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({videoId, start, end}) => {
    console.log('embedId')
    const opts: Options = {
        height: '853',
        width: '480',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          start,
          end,
        },
    };

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (playerRef && start) {
            playerRef.target.seekTo(start)
        }
    }, [isPlaying])
    
    const onReady = (event: any) => {
        console.log('playVideo', event.target.playVideo)
        playerRef = event
    }

    const onClick = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="video-responsive">
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
            <input type="button" onClick={onClick} title="play"/>
        </div>
    )
}
  