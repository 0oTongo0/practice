import React, { Component } from 'react';
// Fragment
import store from '../store/index';
import TodlistUI from './TodlistUI';
import axios from 'axios';
import {
    changValue,
    addValue,
    deleteValue,
    getlist
} from '../store/reducre_fn';
import { connect } from 'react-redux';
class Todlist extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            data : store.getState()
        }
        console.log(this.state.data ,"store.getState()")  
        store.subscribe(this.storeChange.bind(this))      
        this.textInput = React.createRef();
        console.log(this,"thisssssssssssssssssssssss")
    }
    onChange(e){
        const action = changValue(e.target.value)
        // const action = {
        //     type:INPUT_VALUE,
        //     value:e.target.value
        // }
        store.dispatch(action);
    }
    // 更新数据
    storeChange(){
        this.setState({
            data : store.getState()
        })
    }
    // 添加
    ckbtn(){
        console.log("添加")        
        const action = addValue()
        store.dispatch(action)
        console.log(this.textInput.current.inputRef.current.value,"ref..............................")
    }
    // 删除
    delete(index){
        console.log("删除") 
        const action = deleteValue(index)
        store.dispatch(action)
    }
    
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res)
            const data = res.data.data;
            const action = getlist(data);
            store.dispatch(action);
        })
    }
    render() { 
        return ( 
            <>
                <TodlistUI 
                    data={this.state.data} 
                    onChange = {this.onChange.bind(this)} 
                    ckbtn = {this.ckbtn.bind(this)} 
                    delete = {this.delete.bind(this)}
                    ref = {this.textInput}
                />
            </>
         );
    }
}
 
// export default Todlist;
export default connect((state,props)=>{
   console.log(state,"ssssssssssss")
   console.log(props,"aaaaaaa")
   Object.assign({}, props, state);
   console.log( Object.assign({}, props, state),"ppppppppppppp")
},{

})(Todlist)