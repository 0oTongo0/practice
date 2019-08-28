import React, { Component } from 'react';
import Ch from './Ch';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                "大佬1号",
                "大佬2号"
            ]
        }
    }
    add(e){
        if(!this.refs.inp.value) return;
        this.setState({
            list : [ ...this.state.list ,this.refs.inp.value]
        })
        this.refs.inp.value = ""
    }
    del(index){
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list : list
        })
    }
    render() { 
        return (
            <div>
                <div>
                    <input type="text" ref="inp"/>
                    <button onClick={this.add.bind(this)}>添加</button>
                </div>
                {
                    this.state.list.map((data,i) =>{
                        return(
                            <Ch
                                key={i}
                                index = {i}
                                item ={data}
                                del = {this.del.bind(this)}
                            />
                        )
                    })
                }    
                <div>
                    <header>
                        <input type="checkbox" />
                    </header>
                    <section>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </section>
                </div>
            </div>
        );
    }
}
 
export default Index;