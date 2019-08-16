import React,{Component} from "react";
import Banner from "../Banner/Banner";
import Head from "../Head/Head";
import Center from "../Center/Center";
export default class Details extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Head/>
                <Banner/>
                <Center/>
            </div>
        )
    }
}