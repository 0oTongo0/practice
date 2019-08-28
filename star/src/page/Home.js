import React,{Component} from "react";
import {Link , Prompt} from "react-router-dom";
export default class Home extends Component{
    constructor(props){
        super(props)
        console.log(this.props.match.url,"aaaa")
    }
    render(){
        return(
            <div>
                Home
                <Link to="/two">去二级页面</Link>
                {/* <Prompt
                    when={true}
                    message={location => '确定离开吗？'}
                /> */}
            </div>
        )
    }
}