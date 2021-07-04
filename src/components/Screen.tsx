import React, {useState, useCallback} from 'react'
import {TextField, Grid, Button} from '@material-ui/core'
import {PlayerSettings} from '../types/player-types'

interface ScreenProps {
    playerSettings: PlayerSettings
    setPlayerSettings: (settings: PlayerSettings) => void
}
 
export const Screen: React.FC<ScreenProps> = props => {

    const {playerSettings, setPlayerSettings} = props

    const [playerSettingsInputs, setPlayerSettingsInputs] = useState<PlayerSettings>(playerSettings)

    const VideoSettingsRow: React.FC<{videoId: string}> = () => {
        return (
            <Grid container direction="row" justify="space-between">
                <TextField placeholder="start" variant="outlined"/>
                <TextField placeholder="end" variant="outlined"/>
            </Grid>
        )
    }

    const renderSettings = () => {
        return (
            Object.keys(playerSettings).map(key => {
                const videoSettings = playerSettings[key]
                return (
                    <VideoSettingsRow videoId={key}/>
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
            <div className="screen-container">
                <Grid 
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="flex-start"
                        className="settings-wrapper"
                    
                >
                   {renderSettings()}
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
            </Grid>
            </div>
        </Grid>
    )
}
