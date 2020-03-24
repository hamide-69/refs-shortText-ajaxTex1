import React, { Component } from "react";
 import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Animated} from "react-animated-css";


class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://colorlib.com/preview/theme/jackson/images/img_bg_2.jpg" />
                    <Animated className="slide-animat"  animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
               <div className="caption">
                    <h1 className="">Hi !</h1>
                    <h2>I am Web Developer</h2>
                    <button type="button" class="btn btn-outline-secondary btn1"> <i  className="fab fa-react"/> Download My Cv</button>   
                                 </div></Animated> </div>
                <div>
                    <img src="http://thetoptier.net/wp-content/uploads/2015/12/Personal-Brand.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://thetoptier.net/wp-content/uploads/2015/12/Personal-Brand.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
} 
 export default Slider