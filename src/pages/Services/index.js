import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomStyles from './style.module.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../../components/Nav';
import Accordion from '../../components/Accordion';
import Footer from '../../components/Footer';
import AccordionDb from '../../Accordion.json';


const useStyles = makeStyles((theme) => ({

    root: {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold', 
    },
    headersubtext: {
        fontSize: 30,
        textAlign: 'center',
        margin: 'auto',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
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
                        <Typography variant="h3">It's Time To Start Cleaning</Typography>
                        <Typography variant="h4">Thorough. Efficient. Clean.</Typography>
                        <Typography variant="h5">Call for a Consultation</Typography>
                        <Typography component="a" color='inherit' variant="h5" href="tel:18883700123">1 (888) 370-0123</Typography>
                    </div>

                </div>

            </Grid>

            <Grid item xs={12}>

                <Typography variant="h3" className={classes.header}>
                    Our Services 
                </Typography>
                <Typography className={classes.headersubtext}>
                    In all of our services we are dedicated to provide a thorough efficient clean. We can also accommodate extra services for more specific needs 
                </Typography>

            </Grid>

            {AccordionDb.map((acc, index) =>
            <Grid item xs={12} key={index}>
                <Accordion 
                    key={index}
                    id={acc.id}
                    title={acc.title}
                    regservice={acc.regservice}
                    deepservice={acc.deepservice}
                />
            </Grid>)}

            <Grid item xs={12}>
                <Footer />
            </Grid>

        </Grid>

    )
}