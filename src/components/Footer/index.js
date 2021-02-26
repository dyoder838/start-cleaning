import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconContext } from "react-icons";
import { FaYelp } from 'react-icons/fa';


const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'white',
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
        <IconContext.Provider value={{ color: "red", size: "2em" , title: "Yelp", className: "global-class-name" }}>
          <BottomNavigationAction showLabel label="Yelp" icon={<FaYelp onClick={event => window.open("https://www.yelp.com/biz/start-cleaning-lynnwood-3", "_blank")}/>} />
        </IconContext.Provider>
    </BottomNavigation>
  );
}