import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Card2 extends React.Component {
    render() {
        return (
            <div>
                <div id="products" className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="section-title black">{this.props.topic}</h2>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-3 col-sm-6">
                              <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">

                                        </div>
                                        <img src="https://assets.goodhousekeeping.co.uk/main/embedded/14605/cooking-at-ghi-cookery-school-04__medium.jpg?20161125114314" alt=""/></div>
                                    <h4>Cooking</h4>
                                    <div>
                                        <span>Bangkok</span>
                                    </div>
                                    <span>Price :
                                        <em className="price">
                                            1800.00 Baht</em>
                                    </span>
                                </div>
                                    </Link>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">
                                            <div className="overlay-inner">

                                            </div>
                                        </div>
                                        <img src="http://000fdu0.myregisteredwp.com/wp-content/uploads/sites/3001/2016/09/restaurant.jpg" alt=""/></div>
                                    <h4>Chlef Training</h4>
                                    <div>
                                        <span>Bangkok</span>
                                    </div>
                                    <span>Price :
                                        <em className="price">
                                            3700.00 Baht</em>
                                    </span>
                                </div>
                                </Link>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">
                                            <div className="overlay-inner">

                                            </div>
                                        </div>
                                        <Link to="activity_detail"><img src="http://www.nightoutexpert.com/wp-content/uploads/2016/08/living-room-sports-bar-in-dublin.jpg" alt=""/></Link>
                                    </div>
                                    <h4>Night Bar Club</h4>
                                    <div>
                                        <span>Bangkok</span>
                                    </div>
                                    <span>Price :
                                        <em className="price">
                                            840.00 Baht</em>
                                    </span>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">
                                            <div className="overlay-inner">

                                            </div>
                                        </div>
                                        <Link to="activity_detail"><img src="http://r-ak.bstatic.com/images/hotel/max400/837/83797070.jpg" alt=""/></Link>
                                    </div>
                                    <h4>Pichaya Resort & Spa</h4>
                                    <div>
                                        <span>Pattaya</span>
                                    </div>
                                    <span>Price :

                                        <em className="price">
                                            740.00 Baht</em>
                                    </span>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">
                                            <div className="overlay-inner">

                                            </div>
                                        </div>
                                        <Link to="activity_detail"><img src="https://trazy-spot-thumb.s3-ap-southeast-1.amazonaws.com/4-4942417084.jpg" alt=""/></Link>
                                    </div>
                                    <h4>Khaosan R. Guide</h4>
                                    <div>
                                        <span>Bangkok</span>
                                    </div>
                                    <span>Price :

                                        <em className="price">
                                            1200.00 Baht</em>
                                    </span>
                                </div>
                                </Link>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">
                                            <div className="overlay-inner">

                                            </div>
                                        </div>
                                        <Link to="activity_detail"><img src="http://www.mamikugardens.com/images/hike-2-thumb.jpg" alt=""/></Link>
                                    </div>
                                    <h4>Hiking</h4>
                                    <div>
                                        <span>Chiangmai</span>
                                    </div>
                                    <span>Price :

                                        <em className="price">
                                            7200.00 Baht</em>
                                    </span>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">
                                            <div className="overlay-inner">

                                            </div>
                                        </div>
                                        <Link to="activity_detail">
                                            <img src="http://www.muaythaitrainingthailand.com/images/images-index/muay-thai-training-thailand-photo5.jpg" alt=""/></Link>
                                    </div>
                                    <h4>Muay Thai</h4>
                                    <div>
                                        <span>Bangkok</span>
                                    </div>
                                    <span>Price :

                                        <em className="price">
                                            $480.00 Baht</em>
                                    </span>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">
                                            <div className="overlay-inner">
                                            
                                            </div>
                                        </div>
                                        <Link to="activity_detail"><img src="http://www.vistaverde.com/wp-content/uploads/2010/11/biking-03-400x400.jpg" alt=""/></Link>
                                    </div>
                                    <h4>Biking</h4>
                                    <div>
                                        <span>Chiangmai</span>
                                    </div>
                                    <span>Price :

                                        <em className="price">
                                            660.00 Baht</em>
                                    </span>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
