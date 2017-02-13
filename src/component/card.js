import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <section id="portfolio">
                    <div className="container">
                        <h2>{this.props.line}</h2>
                        <h3>{this.props.detail}</h3>
                        <div className="row">
                            <div className="col-lg-12 text-center"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <Link to="/activity_detail">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="http://www.getnowapp.com/wp-content/uploads/2016/04/healthy-cooking.jpg" className="img-responsive" alt=""/>
                                </Link>
                                <div className="portfolio-caption">
                                    <h4>Cooking</h4>
                                    <p className="text-muted">Bangkok</p>
                                    <p className="text-muted">1300 Baht</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <Link to="/activity_detail">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="http://timeout-test.candrholdings.com/media/content/normal/16746_J_Forest_Music_bar.jpg" className="img-responsive" alt=""/>
                                </Link>
                                <div className="portfolio-caption">
                                    <h4>Night Bar Club</h4>
                                    <p className="text-muted">Bangkok</p>
                                    <p className="text-muted">1000 Baht</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <Link to="/activity_detail">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="https://s-media-cache-ak0.pinimg.com/originals/b1/c7/62/b1c7620124391aba1154ca8288abab5b.jpg" className="img-responsive" alt=""/>
                                </Link>
                                <div className="portfolio-caption">
                                    <h4>Treehouse</h4>
                                    <p className="text-muted">Pattaya</p>
                                    <p className="text-muted">2700 Baht</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <Link to="activity_detail">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="http://pathwaytoaus.com/wp-content/uploads/2014/12/cafe-dupont-chef-at-the-dupont-circle-hotel_gallery_image.jpg" className="img-responsive" alt=""/>
                                </Link>
                                <div className="portfolio-caption">
                                    <h4>Chlef Training</h4>
                                    <p className="text-muted">Bangkok</p>
                                    <p className="text-muted">4200 Bath</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <Link to="activity_detail">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="http://cdn.snowkingmountain.com/wp-content/uploads/2015/10/couple-hiking-atop-snow-king-mountain-1024x683.jpg" className="img-responsive" alt=""/>
                                </Link>
                                <div className="portfolio-caption">
                                    <h4>Hiking</h4>
                                    <p className="text-muted">ChiangMai</p>
                                    <p className="text-muted">8500 Bath</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <Link to="activity_detail">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="http://muaythaicampsthailand.com/wp-content/uploads/2012/12/tiger-muay-thai.jpg" className="img-responsive" alt=""/>
                                </Link>
                                <div className="portfolio-caption">
                                    <h4>Muay Thai</h4>
                                    <p className="text-muted">Bangkok</p>
                                    <p className="text-muted">3500 Bath</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
