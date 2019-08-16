import React, { Component } from 'react'
import { Input , Button, List} from 'antd'; 
class TodlistUI extends Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }
    render() { 
        return (  
            <div style={{margin:'55px'}}>
                <div>
                    <input 
                        placeholder="叫大佬"
                        style={{width:'250px',height:'40px'}}
                        onChange = {this.props.onChange}
                        value={this.props.data.inputValue}
                        ref={this.inputRef}
                    />
                    <Button 
                        type="primary" 
                        style={{height:'40px'}}
                        onClick = {this.props.ckbtn}
                    >
                        增加
                    </Button>
                </div>
                <hr/>
                <div>
                <List
                    bordered
                    dataSource={this.props.data.list}
                    renderItem={(item,index) => (
                        <List.Item>
                            {item}
                            <Button 
                                onClick={ () => {this.props.delete(index)}}
                            >
                                删除
                            </Button>
                        </List.Item>
                    )}
                />
                </div>
            </div>
        );
    }
}
 
export default TodlistUI;