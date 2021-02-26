import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FaYelp } from 'react-icons/fa';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { IconContext } from "react-icons";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 345,
    maxHeight: 650, 
    background: "rgba(255,255,255, .4)",
    position: "relative",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  stars: {

  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    lineHeight: 2,
  },
  review: {
    fontSize: 18,
  },
  button: {
    left: 0, 
    bottom: 0,
    position: 'absolute',
    
  },

});

export default function SimpleCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>

      <CardContent>

        <Typography className={classes.name} variant="h5" component="h2">
          {props.name}
        </Typography>

        <Typography className={classes.stars} variant="h5" component="h2">
          {props.stars}
        </Typography>

        <Typography className={classes.title} variant="h5" component="h2">
          {props.title}
        </Typography>

        <Typography className={classes.review} variant="body2" component="p">
          {props.review}
        </Typography>

      </CardContent>

      <CardActions className={classes.button}>
        <IconContext.Provider value={{ color: "red", size: "2em" , title: "Yelp", className: "global-class-name" }}>
          <BottomNavigationAction showLabel label="Yelp" icon={<FaYelp onClick={event => window.open("https://www.yelp.com/biz/start-cleaning-lynnwood-3", "_blank")}/>} />
        </IconContext.Provider>
      </CardActions>

    </Card>
  );
}