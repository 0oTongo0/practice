import React, { Component,Fragment } from 'react';
class Ch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        // console.log(this.props)
    }
    del(){
       this.props.del(this.props.index)
    }
    componentWillReceiveProps(){
        
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")        
        if(nextProps.list != this.props.list){
            return true
        }else{
            return false
        }
    }
    
    render() { 
        console.log("render")        
        return (
            <Fragment>
                <p>{this.props.list} <span onClick={this.del.bind(this)}>x</span></p>
            </Fragment>
        );
    }
}
export default Ch;