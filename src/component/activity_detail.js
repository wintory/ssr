import React, {Component} from 'react'
import {Link} from 'react-router'
import Card from './recommend_card'
import ActivityDetailCard from './activity_detail_card'
import ActivityDetailPic from './activity_detail_pic'
import InputComment from './comment_input'
import ActivityInfo from './activity_information'
import CardSection from './card_section'
import DetailNav from './detail_nav'

class ActivityDetail extends React.Component {
    render() {
        return (

            <div>
                <DetailNav/>
                <section className="mainContentSection">
                    <div className="container">
                        <div className="row">
                            <div className="row marginExten">


                                <div className="col-sm-6 col-xs-12">

                                        <div class="container">
                                          <div class="row ">
                                            <div class="col-sm-3 col-xs-12 blogSidebar">
                                              <aside>
                                            <ActivityDetailCard/>
                                            <ActivityInfo/>
                                            <InputComment/>
                                            </aside>
                                            </div>
                                            </div>
                                            </div>
                                        </div>



                                <div className="col-sm-6 col-xs-12">
                                    <ActivityDetailPic/>

                                </div>


                            </div>

                        </div>
                    </div>

                </section>
                <CardSection/>
            </div>
        )
    }

}

export default ActivityDetail
