import React, {Component} from 'react'
import {Link} from 'react-router'

export default class DetailNav extends React.Component {



    render() {
        return (
          <div>
            <nav id="mainNav" className="navbar navbar-fixed-top white">
                <div className="container">

                    <div className="navbar-header page-scroll ">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand page-scroll" href="home_detail">MileStyle</a>
                    </div>




                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a href="home_detail"></a>
                            </li>
                            <li>

                            </li>
                            <li>
                                <a className="page-scroll" href="login">Login</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
          </div>

        )
    }
}
