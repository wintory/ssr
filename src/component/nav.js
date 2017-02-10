import React,{Component} from 'react'
import {Link} from 'react-router'



export default class Nav extends React.Component{



  render(){
    return (
      <div>
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
            <div className="container">

                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                </div>


                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">

                        <li className="page-scroll">
                            <a href="#contact">Login</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
      </div>

  );
  }
}
