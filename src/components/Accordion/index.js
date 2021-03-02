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
  accordionicon: {
    position: 'absolute'
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    margin: 'auto'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  servicelevel: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 2,
    margin: 'auto'
  },
  regservice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deepservice:{
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonbox: {
    background: 'green',
    position: 'relative',
    height: 40, 
  },
  button: {
    background: 'red',
    position: 'absolute',
    
  }
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          
          expandIcon={<ExpandMoreIcon className={classes.accordionicon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.servicelevel}>
            Standard Services
          
            <ul className={classes.regservice}> 
              {props.regservice.map ((rservice, index) => 
              <li>{rservice}</li>
              )}
            </ul>
         
            Extra Services Offered
            <ul className={classes.deepservice}>
              {props.deepservice.map ((dservice, index) => 
              <li>{dservice}</li>
              )}
            </ul>
            <div className={classes.buttonbox}>
              <Button className={classes.button} size="small" href="tel:+18883700123" >Call</Button>
            </div>
            </Typography>
           
        </AccordionDetails>
      </Accordion>
    </div>
  );
}