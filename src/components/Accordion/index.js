import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  }
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}