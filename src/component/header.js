import React, {Component} from 'react'
import {Link} from 'react-router'


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="fullscreenbanner-container">
                  <div className="fullscreenbanner">
                    <ul>
                      <li data-transition="parallaxvertical" data-slotamount="5" data-masterspeed="700" data-title="Slide 1">
                        <img src="img/home/slider/slider-01.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat"/>
                        <div className="slider-caption container">
                          <div className="tp-caption rs-caption-1 sft start"
                            data-hoffset="0"
                            data-y="270"
                            data-speed="800"
                            data-start="1000"
                            data-easing="Back.easeInOut"
                            data-endspeed="300">
                            Activity Hobby Experience
                            <span>MileStyle</span>
                          </div>
                          <div className="tp-caption rs-caption-2 sft"
                            data-hoffset="0"
                            data-y="400"
                            data-speed="1000"
                            data-start="1500"
                            data-easing="Power4.easeOut"
                            data-endspeed="300"
                            data-endeasing="Power1.easeIn"
                            data-captionhidden="off">
                            We live in a wonderful world that is full of beauty,
charm and adventure. There is no end to the adventures
we can have if only we seek them with our eyes openco laboris nisi ut aliquip ex consequat.
                          </div>
                          <div className="tp-caption rs-caption-3 sft"
                            data-hoffset="0"
                            data-y="485"
                            data-speed="800"
                            data-start="2000"
                            data-easing="Power4.easeOut"
                            data-endspeed="300"
                            data-endeasing="Power1.easeIn"
                            data-captionhidden="off">
                            <span className="page-scroll"><a target="_blank" href="http://goo.gl/lXpsqr" className="btn buttonCustomPrimary">Buy Now</a></span>
                          </div>
                        </div>
                      </li>


                    </ul>
                  </div>
                </div>

              </div>

        )
    }
}
