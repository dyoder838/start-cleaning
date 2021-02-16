import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SplashText from "../../components/SplashText";
import "./style.css";
import Art1Image from '../../assets/gloves.jpg'
import ArtImage2 from '../../assets/cleaningInProgress.jpg'
import ArtImage3 from '../../assets/pride.jpg'




const useStyles = makeStyles((theme) => ({

    root: {
        direction: "row",
        justify: "center",
        alignItems: "stretch",
    },
    articleHeader: {
        margin: 'auto',
        textAlign: 'center',
        padding: '8px',
    },
    covidContainer: {
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
        padding: '8px',
        top: '2px',
        bottom: '2px'
    },
    covid: {
        textAlign: 'center',
    },
    article1: {
        background: 'inherit',
        textAlign: 'center',
    },
    card1: {
        background: 'inherit',
        boxShadow: 'none',

    },
    media1: {
        width: "50%",
        height: '200px',
        margin: "auto",
        top: "0",
    },
    article2: {
        background: 'inherit',
        textAlign: 'center'
    },
    card2: {
        background: 'inherit',
        boxShadow: 'none',
    },
    media2: {
        width: "50%",
        height: '200px',
        margin: "auto",
        top: "0",
    },
    article3: {
        background: 'inherit',
        textAlign: 'center'
    },
    card3: {
        background: 'inherit',
        boxShadow: 'none',
    },
    media3: {
        width: "30%",
        height: '300px',
        margin: "auto",
        top: "0",
    },
    button: {
        margin: 'auto'
    }

}));

export default function MainPage() {

    const classes = useStyles();

    return (

        <Grid container className={classes.root} spacing={2}>


            <Grid item xs={12}>
                <SplashText />
            </Grid>

            <Grid container spacing={2} >

                <Grid item xs={12} >

                    <div className={classes.articleHeader} >

                        <Typography variant="h4">Serving: King, Snohomish, Skagit, and Kitsap Counties</Typography>

                    </div>

                </Grid>
                <Grid item xs={12} className={classes.covidContainer} >

                    <div className={classes.covid} >

                        <Typography variant="h5">COVID-19: We take the pandemic seriously and we follow all state and local guidelines to operate safely in your home or office.</Typography>

                    </div>

                </Grid>


                <Grid item xs={12} md={6} lg={6} className={classes.article1}>

                    <Card className={classes.card1}>

                        <CardActionArea>

                            <CardMedia
                                className={classes.media1}
                                image={Art1Image}
                                title="Cleaning with elbow-grease"
                            />

                            <CardContent>

                                <Typography gutterBottom variant="h5" component="h2">
                                    Our Services
                                    </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    We offer Commercial and residential cleaning services including:
                                    Move in and out, Recurring cleaning, and "I need a break" cleaning.
                                        <br />
                                        follow the link below for more specific details.
                                    </Typography>

                            </CardContent>

                        </CardActionArea>

                        <CardActions>

                            <Button className={classes.button} size="small">
                                Services
                                </Button>

                        </CardActions>

                    </Card>

                </Grid>

                <Grid item xs={12} md={6} lg={6} className={classes.article2}>

                    <Card className={classes.card2}>

                        <CardActionArea>

                            <CardMedia
                                className={classes.media2}
                                image={ArtImage2}
                                title="Cleaning in progress"
                            />

                            <CardContent>

                                <Typography gutterBottom variant="h5" component="h2">
                                    Our Hours
                                    </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Monday - Friday
                                        <br />
                                        8:00 AM - 5:00 PM
                                        <br />
                                        Special hours and days are possible upon request
                                    </Typography>

                            </CardContent>

                        </CardActionArea>

                        <CardActions>

                            <Button className={classes.button} size="small">
                                About Us
                                </Button>

                        </CardActions>

                    </Card>

                </Grid>
                <Grid item xs={12} md={12} lg={12} className={classes.article3}>

                    <Card className={classes.card3}>

                        <CardActionArea>

                            <CardMedia
                                className={classes.media3}
                                image={ArtImage3}
                                title="Cleaning in progress"
                            />

                            <CardContent>

                                <Typography gutterBottom variant="h5" component="h2">
                                    Professional Service With Pride
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                We at Start Cleaning pride ourselves on offering quality work at a fair price. since our beginning, our main goal has been to exceed the expectations of every client by cleaning your home or office as if it were our own.
                                <br />
                                our team of seasoned professionals will clean your home to your exact specifications. for your home, we bring all of our own equipment and eco-friendly cleaning products.
                                </Typography>

                            </CardContent>

                        </CardActionArea>

                        <CardActions>

                            <Button className={classes.button} size="small">
                                Call
                            </Button>

                        </CardActions>

                    </Card>

                </Grid>
            </Grid>

        </Grid>

    )
}