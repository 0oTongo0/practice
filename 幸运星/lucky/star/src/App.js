import React,{Component} from 'react';
import Todlsit from "./page/todlist/Todlsit"
import Index from './page/Index/Index';import { Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './page/store/index'
// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
export default class App extends Component{
    render(){
        return(

                <div>
                    <Provider store={store}>
                        <Route path="/" exact component={Todlsit}/>
                    </Provider>
                </div>
     
            <article className="y-max">
                <Index/>
            </article>        )
    }
}
