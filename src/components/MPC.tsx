import React, {useState} from 'react'
import {Screen} from './Screen'
import {Videos} from './Videos'
import {Grid} from  "@material-ui/core"
import {PlayerSettings} from '../types/player-types'

export const MPC: React.FC = () => {

    const initialSettings: PlayerSettings = {
        "rokGy0huYEA": {start: 1, end: 5},
        "1NMZ0MpaEuY": {start: 1, end: 5},
        "_umbBA6opV8": {start: 1, end: 5},
    }

    const [playerSettings, setPlayerSettings] = useState<PlayerSettings>(initialSettings)

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Screen playerSettings={playerSettings} setPlayerSettings={setPlayerSettings} />
            <Videos playerSettings={playerSettings} />
        </Grid>
    )
}
