import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomStyles from './style.module.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../../components/Nav';

const useStyles = makeStyles((theme) => ({

    root: {
        direction: "row",
        justify: "center",
        alignItems: "stretch",
    },

}));

export default function MainPage() {

    const classes = useStyles();

    return (

        <Grid container className={classes.root}>

            <Grid item xs={12}>
                <div className={CustomStyles.root}>
                    <Nav />
                    <div className={CustomStyles.text}>
                        <Typography variant="h3">Its time to Start Cleaning</Typography>
                        <Typography variant="h4">Thorough. Efficient. Clean</Typography>
                        <Typography variant="h5">Call for a consultation</Typography>
                        <Typography component="a" color='inherit' variant="h5" href="tel:18883700123">1 (888) 370-0123</Typography>
                    </div>
                </div>
            </Grid>

        </Grid>

    )
}
