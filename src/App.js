import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/Main';
// import About from './pages/About';
import Services from '../src/pages/Services'



function App() {

    

    return (

        <Router>       

            <Switch>

                <Route exact path="/" component={MainPage}></Route>
                {/* <Route exact path="/about" component={About}></Route> */}
                <Route exact path="/services" component={Services}></Route>

            
            </Switch>

        </Router>

    );
}

export default App;
