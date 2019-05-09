import React,{Component} from "react";
let time;
export default class Title extends Component{
    constructor(props){
        super(props)
        this.state ={
            err : this.props.err,
            show : this.props.show
        } 
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            show: nextProps.show > this.props.show,
            err:  nextProps.err > this.props.err
        })
        if(nextProps.show){
            time = setTimeout(()=>{
                this.setState({
                    show:false
                },function(){
                    clearTimeout(time);
                })
            },2000)
        }
    }
    render(){
        return(
            <div className="err"  style={{display : this.state.show ? "block" : "none"}}>
                {this.props.err}
            </div>
        )
    }
}
