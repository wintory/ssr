import React, {Component} from 'react'
import {Link} from 'react-router'
import Card from './card'
import ActivityDetailCard from './activity_detail_card'
import Comment from './comment'
class ActivityDetail extends React.Component {
    render() {
        return (
            <div>
                <section id="portfolio" className="bg-light-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Activity Detail</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form name="sentMessage" id="contactForm" novalidate>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ActivityDetailCard/>
                                            <Comment/>
                                        </div>
                                        <div className="col-md-3 margin">
                                            <div className="form-group">
                                                <img src="https://s-media-cache-ak0.pinimg.com/originals/07/57/68/0757689ff6330249baa0ba43a4a78f97.jpg"/>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;
                                            <div className="col-lg-6 ">
                                                <div id="success"></div>
                                                <button type="submit" className="btn btn-xl ">Booking</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <Card line="Recommend"/>
                <Link to="province_detail">go page prov</Link>
            </div>
        )
    }

}

export default ActivityDetail
