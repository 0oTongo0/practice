import React,{Component} from "react";
export default class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className="login">
                <form action="">
                    <h2>
                        log
                    </h2>
                    <div  className="input-box">
                        <input type="text" autocomplete="off" autoFocus  placeholder="用户名" />
                    </div>
                    <div  className="input-box">
                        <input type="password" autocomplete="off" placeholder="密码"/>
                    </div>
                    <div className="button-box">
                        <button>注册</button>
                        <button>登录</button>
                    </div>
                </form>
            </section>
        )
    }
}