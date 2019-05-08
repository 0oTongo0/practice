import React,{Component} from 'react';
import {Route , Link} from 'react-router-dom';
import li from '../Link/Link';
import Swiper from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.min.css';
import img1 from "../../img/3.png";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.png";

export default class Banner extends Component{
  constructor(props){
      super(props)
      this.state={

      }
  }
  componentDidMount(){
    new Swiper(this.swiperID,{
        // loop: true,  //循环
        // autoplay: {   //滑动后继续播放（不写官方默认暂停）
        //     disableOnInteraction: false,
        // },
        pagination:{
           el:this.paginateID,
        }
    })
  }
  render(){
      const imgs = [img1,img2,img3];
      return (
          <section className="y-swiper swiper-container" ref={self => this.swiperID = self}>
              <ul className="swiper-wrapper">
                  {
                    imgs.map((item,index) =>{
                        return(
                            <li key={index}  className="swiper-slide">
                                <img src={item}/>
                            </li>
                        )
                      })
                  }
              </ul>
              <div className="swiper-pagination" ref={self => this.paginateID = self}></div>
          </section>
        );
    }
}