import React,{Component} from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component{
  render(){
    return(
      <div>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-text">
                            <span className="name">Milestyle</span>
                            <span className="skills">Activity Hobby Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

      </div>
    )
  }
}
