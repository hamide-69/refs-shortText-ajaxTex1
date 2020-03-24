import React, { Component } from "react";
 import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Slideshow extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="http://thetoptier.net/wp-content/uploads/2015/12/Personal-Brand.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
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
 export default Slideshow