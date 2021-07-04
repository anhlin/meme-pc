import React, {useState} from 'react'
import {Screen} from './Screen'
import {Videos} from './Videos'
import {Grid} from  "@material-ui/core"

interface PlayerSettings {
    [key: string]: {start: number, end: number}
}

export const MPC: React.FC = () => {

    const [playerSettings, setPlayerSettings] = useState<PlayerSettings>({})

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Screen />
            <Videos />
        </Grid>
    )
}
