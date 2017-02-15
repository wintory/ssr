import React, {Component} from 'react'
import {Link} from 'react-router'
import Nav from './nav'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
              <footer>


              <div className="copyRight clearfix">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-push-6 col-xs-12">
                      <ul className="list-inline">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Support</a></li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-sm-pull-6 col-xs-12">
                      <div className="copyRightText">
                        <p>Copyright © 2017. Create by <a target="_blank" href="#">MileStyle</a>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </footer>
            </div>
        )
    }
}
