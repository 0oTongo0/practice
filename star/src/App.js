import React,{Component} from 'react';
import Index from "./page/Index/Index";
import Login from "./page/Login/Login";
import { Route } from 'react-router-dom';
// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
export default class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <article className="y-max">
                <Index/>
                {/* <Route path="/" exact component={Index}/> */}
                {/* <Route path="/Login" component={Login}/> */}
                {/* <Route  component={Login}/> */}
            </article>
        )
    }
}
