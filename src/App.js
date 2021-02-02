import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Nav from "./components/Nav";
import { makeStyles } from '@material-ui/core/styles';
import MainPage from "./pages/Main";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,

    },
    navBar: {
        zIndex: 1,
    },

}));


function App() {

    const classes = useStyles();

    return (

        <Router>

            <Grid container className={classes.root} >

                <Grid item xs={12} className={classes.navBar}></Grid>
                <Nav />

            </Grid>

            <Switch>

                <Route exact path="/" component={MainPage}>
                </Route>

            
            </Switch>

        </Router>

    );
}

export default App;
