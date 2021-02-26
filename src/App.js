import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/Main';
// import About from './pages/About';




function App() {

    

    return (

        <Router>       

            <Switch>

                <Route exact path="/" component={MainPage}></Route>
                {/* <Route exact path="/about" component={About}></Route> */}

            
            </Switch>

        </Router>

    );
}

export default App;
