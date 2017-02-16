import React from 'react'
import {Link} from 'react-router'
import ActivityCard from './activity_card'
import DetailNav from './detail_nav'
import ProvSearchBox from './province_search_box'
import DetailHeader from './detail_header'

class ProvinceDetail extends React.Component {

    render() {
        return (
            <div>
              <DetailNav/>
                <section className="mainContentSection packagesSection">
                    <div className="container">
                        <div className="row">
                            <ProvSearchBox/>

                            <div className="col-sm-9 col-xs-12">
                                <div className="row sidebarPage">
                                    <div className="col-xs-12">

                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </section>
            </div>
        )
    }
}

export default ProvinceDetail
