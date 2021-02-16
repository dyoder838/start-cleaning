import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Image from '../../assets/background3.jpg'
import Nav from '../Nav'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        border: 'none',
        position: 'relative',
        
        '& > *': {
            width: "100%",
            height: '600px',
            margin: "auto",
            top: "0",
            background: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',   
        },
    },
    textBox: {
        border: 'none',
        textAlign: "center",
        color: "black",
        position: 'relative'
    },
    text: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}));




export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          
            <Paper elevation={0} className={classes.textBox}>
                <Nav />
                <div className={classes.text}>
                    <Typography variant="h3">Its time to Start Cleaning</Typography>
                    <Typography variant="h4">Thorough. Efficient. Clean</Typography>
                    <Typography variant="h5">Call for a consultation</Typography>
                    <Typography variant="h5">1 888 370 0123</Typography>
                </div>
            </Paper>

        </div>
    );
}