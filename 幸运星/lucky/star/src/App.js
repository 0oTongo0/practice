import React,{Component} from 'react';
import Banner from "./page/Banner/Banner";
import Head from "./page/Head/Head";
import Footer from "./page/Footer/Footer";
import Center from "./page/Center/Center";
import Login from "./page/Login/Login"
import { Route } from 'react-router-dom'
// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
export default class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <article className="y-max">
               <Head/>
               <Banner/>
               <Center/>
               <Footer/>
            </article>
        )
    }
}
