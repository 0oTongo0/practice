import React,{Component} from "react";
const data = [
    {
        id:1,
        name:"admin",
        password:"123456"
    },
    {
        id:2,
        name:"o0o",
        password:"123456"
    }
];
let time;
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            off:"off",  // 是否记住
            valueName:"",  // 用户名
            valuePassword:"", // 密码
            err:"",   // 提示语
            show:false, // 提示是否出现
            type:"password", //密码输入框类型
            flag:true,   //默认密码框
            bool:true,
        }
    }

    // 用户名
    Name (e){
        this.setState(
            {
                valueName : e.target.value
            }
        )
    }
    
    // 密码
    Password (e){
        this.setState(
            {
                valuePassword : e.target.value
            }
        )
    }

    // 是否显示密码
    eye(e){
        this.setState({
            flag:!this.state.flag,
            type:!this.state.flag ? "password" : "text"
        })
    }

    // 禁止提交
    formsub(e){
        e.preventDefault()
    }
    
    // 判断
    sub (){  
        this.setState({
            bool: false,
         })
        let y =  data.map((item,index)=>{
            return item
        })  
        if(this.state.valueName === "" || this.state.valueName === null){
            this.setState({
                show:true,
                err:"用户名不能为空",
                bool: true,
            })
        }else if(this.state.valuePassword === "" || this.state.valuePassword === null){
            this.setState({
                show:true,
                err:"密码不能为空",
                bool: true,
            })
        }else if(this.state.valuePassword === "123456" && this.state.valueName === "admin"){
            this.setState({
                show:true,
                err:"大佬好",
                 bool: true,
            })
        }
        else{
            this.setState({
                show:false,
                err:""
            })
        }
    }
    render(){
        return(
            <section className="login">
                <form onSubmit={this.formsub.bind(this)}>
                    <h2>
                        幸运星
                    </h2>
                    <div  className="input-box">
                        <input type="text" autoComplete={this.off} autoFocus value={this.state.valueName}  placeholder="用户名" onChange={this.Name.bind(this)}/>
                        <i></i>
                    </div>
                    <div  className="input-box">
                        <input type={this.state.type} autoComplete={this.off}  value={this.state.valuePassword} placeholder="密码" onChange={this.Password.bind(this)}/>
                        <i></i>
                        <a className={this.state.flag ? "password-hide" : "password-show"} onTouchStart={this.eye.bind(this)}></a>
                    </div>
                    <div className="button-box">
                        <button>注册</button>
                        <button onTouchStart={this.sub.bind(this)}>登录</button>
                    </div>
                </form>
            </section>
        )
    }
}