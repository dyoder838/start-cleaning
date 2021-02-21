import React from 'react';
import Typography from '@material-ui/core/Typography';
import Nav from '../Nav';
import CustomStyles from './style.module.css';

export default function SimplePaper() {

    return (
        <div className={CustomStyles.root}>
            <Nav />
            <div className={CustomStyles.text}>
                <Typography variant="h3">Its time to Start Cleaning</Typography>
                <Typography variant="h4">Thorough. Efficient. Clean</Typography>
                <Typography variant="h5">Call for a consultation</Typography>
                <Typography component="a" color='inherit' variant="h5" href="tel:18883700123">1 (888) 370-0123</Typography>
            </div>
        </div>
    );
}