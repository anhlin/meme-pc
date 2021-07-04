import YouTube, {Options} from 'react-youtube'
import {useState, useEffect} from 'react'

interface YoutubeEmbedProps {
    videoId: string
    start?: number
    end?: number
}

let playerRef: any = null
let playerRef2: any = null
let playerRef3: any = null


export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({videoId, start, end}) => {    
    const opts: Options = {
        height: '853',
        width: '480',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          start,
          end,
        },
    }

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (videoId === "rokGy0huYEA") {
            if (playerRef && start) {
                playerRef.target.seekTo(start)
                playerRef.target.playVideo()
            }        
        } else if (videoId === "1NMZ0MpaEuY") {
            if (playerRef && start) {
                playerRef2.target.seekTo(start)
                playerRef2.target.playVideo()
            }    
        } else if (videoId === "_umbBA6opV8") {
            if (playerRef && start) {
                playerRef3.target.seekTo(start)
                playerRef3.target.playVideo()
            }        
        }
    }, [isPlaying])
    
    const onReady = (event: any) => {
       if (videoId === "rokGy0huYEA") {
           playerRef = event
       } else if (videoId === "1NMZ0MpaEuY") {
           playerRef2 = event
       } else if (videoId === "_umbBA6opV8") {
           playerRef3 = event
       }
    }
    
    const onClick = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="video-responsive">
            <YouTube className="player" videoId={videoId} opts={opts} onReady={onReady} />
            <input type="button" onClick={onClick} title="play" />
        </div>
    )
}
    