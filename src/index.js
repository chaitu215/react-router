import React , { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router , Route , Switch,Link} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import './style.css';

const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )

const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )} />
    </div>
  )

  
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
                        <Route path={"/topics"} component={Topics} />
                    </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

render(<App /> , document.getElementById('root'));