import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SplashText from "../../components/SplashText"
import "./style.css"

const useStyles = makeStyles((theme) => ({

    root: {
        
    },
    info: {
        marginTop: 10, 
    },
    buttonsGrid: {
       
        marginTop: 10,

    }, 
}));

export default function MainPage() {
   
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <SplashText />
            </Grid>
        </Grid>

    )
}