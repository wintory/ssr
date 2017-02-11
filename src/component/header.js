import React,{Component} from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component{
  render(){
    return(
      <div>
        <header>
        <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
    <div className="overlay"></div>

    <ol className="carousel-indicators">
      <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
      <li data-target="#bs-carousel" data-slide-to="1"></li>
      <li data-target="#bs-carousel" data-slide-to="2"></li>
    </ol>


    <div className="carousel-inner">
      <div className="item slides active">
        <div className="slide-1"></div>
        <div className="hero">
          <hgroup>
              <h1>Milestyle</h1>
              <h3>Activity Hobby Experience</h3>
          </hgroup>
          <button className="btn btn-hero btn-lg" role="button">See all Activity</button>
        </div>
      </div>
      <div className="item slides">
        <div className="slide-2"></div>
        <div className="hero">
          <hgroup>
            <h1>Milestyle</h1>
            <h3>Activity Hobby Experience</h3>
          </hgroup>
          <button className="btn btn-hero btn-lg" role="button">See all Activity</button>
        </div>
      </div>
      <div className="item slides">
        <div className="slide-3"></div>
        <div className="hero">
          <hgroup>
            <h1>Milestyle</h1>
            <h3>Activity Hobby Experience</h3>
          </hgroup>
        <button className="btn btn-hero btn-lg" role="button">See all Activity</button>
        </div>
      </div>
    </div>
  </div>
</header>
      </div>
    )
  }
}
