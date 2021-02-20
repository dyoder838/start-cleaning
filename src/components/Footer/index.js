import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon onClick={event => window.open("https://www.facebook.com/start.cleaning.737", "_blank")}/>} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon onClick={event => window.open("https://www.linkedin.com/in/daiane-rodrigues-995784205/", "_blank")}/>} />
        
    </BottomNavigation>
  );
}