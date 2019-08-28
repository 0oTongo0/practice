import React,{Component} from 'react';
import Index from './page/Index/Index';
import { Route } from 'react-router-dom'
export default class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <article className="y-max">
                <Index/>
            </article>
        )
    }
}
