import React,{Component} from 'react';
import Footer from "../Footer/Footer";
import { Route , Link , Switch} from 'react-router-dom';
// import Ck from "../Ck";
import Home from "../Home";
import Two from "../Two";
export default class Index extends Component{
    constructor(props){
        super(props)
        console.log(this.props,"0.0.0")
    }
    render(){
        const Ck = () => <div>aaa</div>;
        return(
            <article className="y-max">
                <Footer/>
                <section>
                    <Route path="/home" component={Home} />
                    <Route path="/ck"   component={Ck}/>
                    <Route path="/two"  component={Two}/>
                </section>
            </article>
        )
    }
}
