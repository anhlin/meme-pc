import React from 'react'
import {YoutubeEmbed} from '../components/YoutubeEmbed'
import {Grid} from '@material-ui/core'
import {PlayerSettings} from '../types/player-types'

interface VideosProps {
    playerSettings: PlayerSettings
}

export const Videos: React.FC<VideosProps> = props => {

    const {playerSettings} = props

    const renderVideos = () => {
        return (
            Object.keys(playerSettings).map(key => {
                const video = playerSettings[key]
                return (
                    <YoutubeEmbed videoId={key} start={video.start} end={video.end} />
                )
            })
        )
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            {renderVideos()}
        </Grid>
    )
}
