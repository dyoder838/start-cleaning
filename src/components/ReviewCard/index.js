import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
  },
  review: {
      fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(prop) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>

      <CardContent>
       
        <Typography className={classes.title} variant="h5" component="h2">
          {prop.title}Example Review
        </Typography>
        
        <Typography className={classes.review} variant="body2" component="p">
            {prop.review}
          {'"Start Cleaning Was Great"'}
        </Typography>
        
      </CardContent>

      <CardActions>
        <Button size="small">Yelp</Button>
      </CardActions>

    </Card>
  );
}