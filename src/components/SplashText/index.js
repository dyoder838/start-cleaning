import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Image from '../../assets/background3.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        
        '& > *': {
            width: "100%",
            height: '500px',
            margin: "auto",
            top: "0",
            background: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
            
        },
    },
    textBox: {
        
        textAlign: "center",
        color: "black"
    },
    text: {
        padding: '100px', 
    }
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Paper elevation={0} className={classes.textBox}>
                <div className={classes.text}>
                    <h1>Its time to Start Cleaning</h1>
                    <h3>Thorough. Efficient. Clean. </h3>
                    <h3>Call for a consultation</h3>
                    <h3>1 888 370 0123</h3>
                </div>
            </Paper>

        </div>
    );
}