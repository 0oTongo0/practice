import React,{Component} from "react";
import {NavLink,Link} from "react-router-dom";
var userList = [
    {
      id: 1,
      text: '首页',
      link: "/home"
    }, {
      id: 2,
      text: '查看',
      link: '/ck'
    }, {
      id: 3,
      text: '我的',
      link: "/my"
    }
  ]
export default class Footer extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <footer className="footer">
                <ul>
                    {
                        userList.map((item) =>{
                            return(
                                <li key={item.id}>
                                    <NavLink to={item.link} activeClassName="active">
                                        {item.text}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </footer>
        )
    }
}