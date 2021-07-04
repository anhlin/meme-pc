import React, {useState} from 'react'
import {TextField, Grid, Button} from '@material-ui/core'
 
export const Screen: React.FC = () => {
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
                    <VideoSettingsRow />
                    <VideoSettingsRow />
                    <VideoSettingsRow />
                    <Button variant="contained" color="primary">
                            Save
                    </Button>
            </Grid>
            </div>
        </Grid>
    )
}

const VideoSettingsRow: React.FC = () => {
    return (
        <Grid container direction="row" justify="space-between">
            <TextField variant="outlined"/>
            <TextField variant="outlined"/>
        </Grid>
    )
}