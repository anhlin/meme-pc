import React from 'react'
import {YoutubeEmbed} from '../components/YoutubeEmbed'
import {Grid} from '@material-ui/core'

export const Videos: React.FC = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <YoutubeEmbed videoId={`rokGy0huYEA`} />
            <YoutubeEmbed videoId={`rokGy0huYEA`} />
            <YoutubeEmbed videoId={`rokGy0huYEA`} />
        </Grid>
    )
}