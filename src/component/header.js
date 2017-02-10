import React,{Component} from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component{
  render(){
    return(
      <div>
        
        <header>

          <div className="container">

              <div className="intro-text">
                  <div className="intro-lead-in">Welcome To Our Studio!</div>
                  <div className="intro-heading">It's Nice To Meet You</div>
                  <a href="#services" className="page-scroll btn btn-xl">Tell Me More</a>
              </div>
          </div>


   </header>

      </div>
    )
  }
}
