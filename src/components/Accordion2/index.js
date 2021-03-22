import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  accordionIcon: {
    position: 'absolute'
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    margin: 'auto'
  },
  roomTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  accordionServices: {
    textAlign: 'left',
    margin: 'auto',
    [theme.breakpoints.only('md')]: {
      width: '25%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%',
    },
  },
  service: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    fontWeight: 'bold',
    backgroundColor: '#e5e8eb',
  }
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>

        <AccordionSummary
          
          expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

          <Typography className={classes.heading}>{props.accordiontitle}</Typography>

        </AccordionSummary>

        {props.roomsarr.map((data, index) => 
        <AccordionDetails key={index} title={data.title} services={data.services}>

          <Typography component='div' className={classes.accordionServices}>
      
            <Typography className={classes.roomTitle} > {data.title} </Typography>
      
            <ul>
                {data.services.map((data2, index2) =>
                <li className={classes.service} key={index2}>
                {data2}
                </li>)}

            </ul>
          
              <Button className={classes.button} size="large" href="tel:+18883700123" >Call for a Consultation</Button>
          
            </Typography>
           
        </AccordionDetails>)}

      </Accordion>
    </div>
  );
}