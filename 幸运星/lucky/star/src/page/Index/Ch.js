import React, { Component, Fragment } from 'react';
class Ch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    del(){
        this.props.del(this.props.index)
    }
    render() { 
        return ( 
            <Fragment>
                <p>
                    {this.props.item}
                    <small onClick={this.del.bind(this)}>删除</small>
                </p>
            </Fragment>
         );
    }
}
 
export default Ch;