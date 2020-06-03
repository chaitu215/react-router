import React , { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import './style.css';
import NestedView from './Nested';

    //=--------
  
class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <div className="wrapper">
                    <Switch>
                        <Route path={"/"} exact component={Home} />
                        <Route path={"/about"} component={About} />
                        <Route path="/nested" component={NestedView} />
                    </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

render(<App /> , document.getElementById('root'));