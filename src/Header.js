import React , {Component} from 'react';
import {NavLink , Link} from 'react-router-dom';
import './style.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = "header">
                <div className="container">
                    <div className="logo">
                        <NavLink to="/">Logo</NavLink>
                    </div>

                    <div className="navbar">
                        <ul>
                            <li>
                                <NavLink to="/" exact activeStyle={{color:'black'}}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" exact activeStyle={{color:'black'}}>About</NavLink>
                            </li>  
                            <li><Link to="/topics">Topics</Link></li>    
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default Header;