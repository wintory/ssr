import React, {Component} from 'react'
import {Link} from 'react-router'
import SearchBox from './searchbox'

export default class Nav extends React.Component {

    render() {
        return (
          <div>
            <nav id="mainNav" className="navbar navbar-custom navbar-fixed-top">
                <div className="container">

                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">MileStyle</a>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li>
                            <SearchBox/>
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
