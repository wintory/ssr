import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ActivityCard extends Component {

    render(){
      return(
        <div>
          <div className="media packagesList">
            <a className="media-left " href="activity_detail">
              <img className="media-object" src="img/packages/package-list-01.png" alt="Image"/>
            </a>
            <div className="media-body">
              <div className="bodyLeft">
                <h4 className="media-heading"><a href="activity_detail">Suspendisse Tour</a></h4>
                <div className="countryRating">
                  <span>Asia</span>
                  <ul className="list-inline rating">
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  </ul>
                </div>
                <p>Integer purus ex, dictum nec elementum eu, tristique vel lectus. Donec rutrum lectus et pharetra egestas.</p>
                <ul className="list-inline detailsBtn">
                  <li><span className="textInfo"><i className="fa fa-calendar" aria-hidden="true"></i> 27 jan, 2016</span></li>
                  <li><span className="textInfo"><i className="fa fa-clock-o" aria-hidden="true"></i> 5 days</span></li>
                </ul>
              </div>
              <div className="bodyRight">
                <div className="bookingDetails">
                  <h2>$499</h2>
                  <p>Per Person</p>
                  <a href="activity_detail" className="btn buttonTransparent clearfix">Details</a>
                  <a data-toggle="modal" data-target="#inquiryModal" href="#" className="btn buttonTransparent">Booking</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      )

    }

}
