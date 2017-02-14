import React, {Component} from 'react'
import {Link} from 'react-router'
import Card from './card'
import ActivityDetailCard from './activity_detail_card'
import Comment from './comment'
class ActivityDetail extends React.Component {
    render() {
        return (
            <div className="marg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center marg">
                            <h2 className="section-heading">Activity Detail</h2>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form name="sentMessage" id="contactForm" novalidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ActivityDetailCard/>

                                    </div>
                                    <div className="col-md-3 margin">
                                        <div className="form-group">
                                            <img src="http://orleanshub.com/archived_images/news_photos_2015/110815_HG2752.jpg"/>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;


                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Card2 topic="Recommend"/>
            </div>
        )
    }

}

export default ActivityDetail
