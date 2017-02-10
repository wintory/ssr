import React,{Component} from 'react'
import {Link} from 'react-router'


export default class Card extends React.Component{
  render(){
    return(
    <div>
      <section id="portfolio" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Recommend Activity</h2>

                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to="activity_detail" className="portfolio-link" data-toggle="modal">
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
                    <Link to="activity_detail" className="portfolio-link" data-toggle="modal">
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
                          <p className="text-muted">1700 Baht</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to="activity_detail" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="https://s-media-cache-ak0.pinimg.com/originals/b1/c7/62/b1c7620124391aba1154ca8288abab5b.jpg" className="img-responsive" alt=""/>
                    </Link>
                    <div className="portfolio-caption">
                        <h4>Treehouse</h4>
                        <p className="text-muted">Bangkok</p>
                        <p className="text-muted">1700 Baht</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to="activity_detail" className="portfolio-link" data-toggle="modal">
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
                        <p className="text-muted">1200 Bath</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to="activity_detail" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/escape.png" className="img-responsive" alt=""/>
                    </Link>
                    <div className="portfolio-caption">
                        <h4>Escape</h4>
                        <p className="text-muted">Website Design</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link to="activity_detail" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/dreams.png" className="img-responsive" alt=""/>
                    </Link>
                    <div className="portfolio-caption">
                        <h4>Dreams</h4>
                        <p className="text-muted">Website Design</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
  }
}
