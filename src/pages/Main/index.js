import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Nav from '../../components/Nav';
import CustomStyles from './style.module.css';
import Footer from '../../components/Footer';
import ReviewCard from '../../components/ReviewCard'
import Art1Image from '../../assets/gloves.jpg';
import ArtImage2 from '../../assets/open.jpg';
import ArtImage3 from '../../assets/pride.jpg';
import YelpDB from '../../YelpDB.json';

const theme = createMuiTheme();

theme.typography.body2 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};
theme.typography.h5 = {
    fontSize: '2rem',
    fontWeight: "bold",
    '@media (min-width:600px)': {
        fontSize: '2rem',
        fontWeight: "bold",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
        fontWeight: "bold",
    },
};

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
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
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
        width: "100%",
        height: '300px',
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
        width: "100%",
        height: '300px',
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
        width: "75%",
        height: '400px',
        margin: "auto",
        top: "0",
    },
    yelp: {
        margin: 'auto',
        textAlign: 'center',
        padding: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
    },
    buttonBox: {
        margin: 'auto',
    },
    button: {
        margin: 'auto',
        fontWeight: 'bold',
    },


}));

export default function MainPage() {

    const classes = useStyles();

    return (

        <Grid container className={classes.root} >


            <Grid item xs={12}>
                <div className={CustomStyles.root}>
                    <Nav />
                    <div className={CustomStyles.text}>
                        <Typography variant="h3">It's Time To Start Cleaning</Typography>
                        <Typography variant="h4">Thorough. Efficient. Clean.</Typography>
                        <Typography variant="h5">Call for a Consultation</Typography>
                        <Typography component="a" color='inherit' variant="h5" href="tel:18883700123">1 (888) 370-0123</Typography>
                        <Typography variant="h5">Or Text Us At</Typography>
                        <Typography component="a" color='inherit' variant="h5" href="sms:+14255510181">1 (425) 551-0181</Typography>
                    </div>
                </div>
            </Grid>

            <Grid container>

                <Grid item xs={12} >

                    <div className={classes.articleHeader} >

                        <Typography variant="h4">Serving: King, Snohomish, and Skagit Counties</Typography>

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

                            <CardContent className={classes.font}>

                                <Typography gutterBottom variant="h5" component="h2">
                                    Our Services
                                </Typography>

                                <ThemeProvider theme={theme}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        We offer Commercial and residential cleaning services including:
                                        Move in and out, Recurring cleaning, and "I need a break" cleaning.
                                    <br />
                                    follow the link below for more specific details.
                                </Typography>
                                </ThemeProvider>

                            </CardContent>

                        </CardActionArea>

                        <CardActions>

                            <Button className={classes.button} href='/services' size="small" >
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

                                <ThemeProvider theme={theme}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Monday - Friday
                                        <br />
                                        8:00 AM - 5:00 PM
                                        <br />
                                        Special hours and days are possible upon request
                                    </Typography>
                                </ThemeProvider>

                            </CardContent>

                        </CardActionArea>

                        <CardActions>

                            {/* <Button className={classes.button} href='/about' size="small">
                                About Us
                            </Button> */}

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

                                <ThemeProvider theme={theme}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        We at Start Cleaning pride ourselves on offering quality work at a fair price. Since our beginning, our main goal has been to exceed the expectations of every client by cleaning your home or office as if it were our own.
                                    <br />
                                    Our team of seasoned professionals will clean your home to your exact specifications. For your home, we bring all of our own equipment and eco-friendly cleaning products.
                                    </Typography>
                                </ThemeProvider>


                            </CardContent>

                        </CardActionArea>

                        <CardActions className={classes.buttonBox}>

                            <Button className={classes.button} size="small" href="tel:+18883700123" >
                                Call
                            </Button>
                            <Button className={classes.button} size="small" href="sms:+14255510181" >
                                Text
                            </Button>

                        </CardActions>

                    </Card>

                </Grid>

                <Grid item xs={12} >

                    <div className={classes.yelp} >

                        <Typography variant="h4">See What Our Customers Have To Say</Typography>

                    </div>

                </Grid>

            </Grid>
            
            <Grid container justify="space-evenly" direction="row" alignItems="center"> 

            {YelpDB.map((card, index) =>
                <Grid key={index} item xs={12} md={6} lg={6}>

                    <ReviewCard 
                     key={index}
                     id={card.id}
                     title={card.title}
                     review={card.review}
                     stars={card.stars}
                     name={card.name}
                     link={card.link} />

                </Grid>)}

            </Grid>
            <Grid item sm={12}>
                <Footer />
            </Grid>

        </Grid>

    )
}