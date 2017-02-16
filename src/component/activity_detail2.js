import React, {Component} from 'react'
import {Link} from 'react-router'
import Card from './recommend_card'
import ActivityDetailCard from './activity_detail_card'
import ActivityDetailPic from './activity_detail_pic'
import InputComment from './comment_input'
import ActivityInfo from './activity_information'
import CardSection from './card_section'

class ActivityDetail extends React.Component {
    render() {
        return (

            <div>
              <div className="col-sm-9 col-sm-pull-3 col-xs-12">
          <div className="row">
            <div className="col-xs-12">
              <div id="package-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#package-carousel" data-slide-to="0" className=""></li>
                  <li data-target="#package-carousel" data-slide-to="1" className=""></li>
                  <li data-target="#package-carousel" data-slide-to="2" className="active"></li>
                </ol>
                <a className="left carousel-control" href="#package-carousel" data-slide="prev"><span className="glyphicon glyphicon-menu-left"></span></a>
                <a className="right carousel-control" href="#package-carousel" data-slide="next"><span className="glyphicon glyphicon-menu-right"></span></a>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="well">
                <div className="row">
                
                  <div className="col-sm-5 col-xs-12">
                    <div className="packageInfo">
                      <h4>Information</h4>
                      <dl className="dl-horizontal">
                        <dt>Location:</dt>
                        <dd>Maldives</dd>
                        <dt>Duration:</dt>
                        <dd>jul 15, 2016 - Jul 18, 2016</dd>
                        <dt>Available Seat:</dt>
                        <dd>30</dd>
                        <dt>Price:</dt>
                        <dd><del>$8,050</del>  <span>$6,500</span></dd>
                      </dl>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-12">
                    <div className="packageInfo">
                      <h4>MALDIVES TOUR</h4>
                      <p>3 Days Tour <span>$6,500</span></p>
                      <a href="booking-1.html" className="btn buttonCustomPrimary">BOOK NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="generalInfo">
                <h2>General Information</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="panel-group" id="accordionIcons">
                 <div className="panel panel-default">
                   <a className="panel-heading accordion-toggle" data-toggle="collapse" data-parent="#accordionIcons" href="#collapseOne">
                       <span>Day 1 - some title here</span>
                       <i className="indicator fa fa-minus  pull-right"></i>
                   </a>
                   <div id="collapseOne" className="panel-collapse collapse in">
                     <div className="panel-body">
                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                     </div>
                   </div>
                 </div>
                 <div className="panel panel-default">
                     <a className="panel-heading accordion-toggle" data-toggle="collapse" data-parent="#accordionIcons" href="#collapseTwo">
                       <span>Day 1 - some title here</span>
                       <i className="indicator fa fa-plus  pull-right"></i>
                     </a>
                   <div id="collapseTwo" className="panel-collapse collapse">
                     <div className="panel-body">
                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                     </div>
                   </div>
                 </div>
                 <div className="panel panel-default">
                     <a className="panel-heading accordion-toggle" data-toggle="collapse" data-parent="#accordionIcons" href="#collapseThree">
                       <span>Day 1 - some title here</span>
                       <i className="indicator fa fa-plus  pull-right"></i>
                     </a>
                   <div id="collapseThree" className="panel-collapse collapse">
                     <div className="panel-body">
                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }

}

export default ActivityDetail
