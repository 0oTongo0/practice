import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Login from "../Login/Login"
export default class Head extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header className="y-header">
                <span>log</span>
                <Link to="Login">
                    登录
                </Link>
            </header>
        )
    }
}
  
