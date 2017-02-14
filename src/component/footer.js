import React, {Component} from 'react'
import {Link} from 'react-router'
import Nav from './nav'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
              <footer className="main-footer">
                 <div className="container">
                    <div className="row">
                       <div className="col-md-5">
                          <div className="widget widget_links">
                             <h5 className="widget-title">Top Locations</h5>
                             <ul>
                                <li><a href="#">Lorem impsum dolor</a></li>
                                <li><a href="#">Sit amet consectetur</a></li>
                                <li><a href="#">Adipisicing elit</a></li>
                                <li><a href="#">Eiusmod tempor</a></li>
                                <li><a href="#">incididunt ut labore</a></li>
                             </ul>
                          </div>
                       </div>

                       <div className="col-md-5">
                          <div className="widget widget_links">
                             <h5 className="widget-title">Featured Boats</h5>
                             <ul>
                                <li><a href="#">Lorem impsum dolor</a></li>
                                <li><a href="#">Sit amet consectetur</a></li>
                                <li><a href="#">Adipisicing elit</a></li>
                                <li><a href="#">Eiusmod tempor</a></li>
                             </ul>
                          </div>
                       </div>

                       <div className="col-md-9">
                          <div className="widget widget_social">
                             <h5 className="widget-title">Subscribe to our newsletter</h5>
                             <form className="subscribe-form">
                                <div className="input-line">
                                   <input type="text" name="subscribe-email" value="" placeholder="Your email address" />
                                </div>
                                <button type="button" name="subscribe-submit" className="btn btn-special no-icon">Subscribe</button>
                             </form>

                             <ul className="clean-list social-block">
                                <li>
                                   <a href="#"><i className="icon-facebook"></i></a>
                                </li>
                                <li>
                                   <a href="#"><i className="icon-twitter"></i></a>
                                </li>
                                <li>
                                   <a href="#"><i className="icon-google-plus"></i></a>
                                </li>
                             </ul>
                          </div>
                       </div>

                       <div className="col-md-5">
                          <div className="widget widget_links">
                             <h5 className="widget-title">Contact us</h5>
                             <ul>
                                <li><a href="#">Lorem impsum dolor</a></li>
                                <li><a href="#">Sit amet consectetur</a></li>
                                <li><a href="#">Adipisicing elit</a></li>
                                <li><a href="#">Eiusmod tempor</a></li>
                                <li><a href="#">incididunt ut labore</a></li>
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>
              </footer>
            </div>
        )
    }
}
