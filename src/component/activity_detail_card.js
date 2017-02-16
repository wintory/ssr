import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ActivityDetailCard extends React.Component {
    render() {
        return (
            <div >


                    <div className="well">
                        <div className="row ">

                            <div className="col-xs-12 col-sm-6 col-lg-8">
                                <div className="packageInfo">
                                    <h4>Activity name</h4>
                                    <dl className="dl-horizontal">
                                        <dt>Location:</dt>
                                        <dd>Maldives</dd>
                                        <dt>Duration:</dt>
                                        <dd></dd>
                                        <dt>Available Seat:</dt>
                                        <dd>30</dd>
                                        <dt>Price:</dt>
                                        <dd>
                                            <span>6,500 Baht</span>
                                        </dd>

                                    </dl>

                                </div>
                            </div>
                            <div className="col-xs-6 col-lg-4">
                                <div className="packageInfo ">
                                    <h4>MALDIVES TOUR</h4>
                                    <p>3 Days Tour
                                        <span>$6,500</span>
                                    </p>
                                    <a href="booking-1.html" className="btn buttonCustomPrimary">BOOK NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        )
    }
}
