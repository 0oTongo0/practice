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
        console.log(nextProps)
        this.setState({
            show: nextProps.show,
            err:  nextProps.err
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
    componentDidMount(){
        if(this.props.show){
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
            <div className="err"  style={{display : this.props.show ? "block" : "none"}}>
                {this.props.err}
            </div>
        )
    }
}
