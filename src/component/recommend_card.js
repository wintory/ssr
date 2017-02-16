import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Card extends React.Component {

    constructor(props){
      super(props)
      this.state ={
        activity_name : "aaaa",
        activity_description : "aaa dest",
        activity_title : "Activity you may know",
        activity_price : 299,
        activity_date : "12-12-2017",
        activity_cover : "img/home/deal/deal-01.jpg"
      }


    }

    render() {
      let {activity_title,activity_name,activity_description,activity_price,activity_date,activity_cover} = this.state
        return (
            <div>

                      <div className="col-sm-4 col-xs-12">
                        <div className="thumbnail deals">
                          <img src={activity_cover} alt="deal-image"/>
                          <a href="activity_detail" className="pageLink"></a>
                          <div className="discountInfo">
                            <ul className="list-inline rating homePage">
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                              <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                            <ul className="list-inline duration">
                              <li>{activity_price} Baht</li>
                              <li>{activity_date}</li>
                            </ul>
                          </div>
                          <div className="card-dest">
                            <h4><a href="activity_detail" className="captionTitle">{activity_name}</a></h4>
                            <p>{activity_description}</p>
                          </div>
                        </div>
                      </div>

                      </div>


        )
    }
}
