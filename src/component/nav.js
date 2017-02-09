import React,{Component} from 'react'
import {Link} from 'react-router'


export default class Nav extends React.Component{



  render(){
    return(
        <div>
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="province_detail">Page 1</a></li>
                <li><a href="activity_detail">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
            </div>
          </nav>
        </div>

    )
  }
}
