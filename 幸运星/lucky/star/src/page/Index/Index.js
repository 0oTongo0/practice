import React,{Component,Fragment} from 'react';
import Ch from './Ch';
import store from "../store/index";
import {reducre_fn}  from '../store/reducre_fn';
export default class Index extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:"",
            list:store.getState().list,
            html:'<h1>111</h1>'
        }
       
        // this.text = store.getState();
        // console.log(this.text)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    handChange(e){
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }
    fn(e){
        if(!this.refs.in1.value) return;
        const action = reducre_fn(this.refs.in1.value);
        // const action = 
        // {
        //     type : "inputvalue",
        //     value:this.refs.in1.value
        // }
        store.dispatch(action)
        // this.setState({
        //     list : [...this.state.list,this.refs.in1.value]
        // },() =>{
        //     console.log(this.state.list)
        // })
        this.refs.in1.value = ""
    }
    del(i){
        console.log(i)
        let list = this.state.list;
        list.splice(i,1);
        this.setState({
            list:list
        })
    }

    storeChange(){
        this.setState(store.getState())
    }
    render(){
        return(
            <article className="y-max">
                <div>
                    <input type="text" ref="in1"/>
                    <button onClick={this.fn.bind(this)} >添加</button>
                    <div dangerouslySetInnerHTML={{__html:this.state.html}}></div>
                </div>
                <div>
                    {
                        this.state.list.map((item,index)=>{
                            return  <Ch 
                                        key={index}
                                        list = {item}
                                        index = {index}
                                        del = {this.del.bind(this)}
                                    />
                        })
                    }
                </div>
                <hr/>
            </article>
        )
    }
}
