import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Nav extends React.Component {

    render() {
        return (
            <div>
                <nav className=" navbar navbar-default navbar-custom navbar-fixed-top navbar-inner">

                    <div className="container">

                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                Menu
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link to="home" className="navbar-brand page-scroll">MileStyle</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="hidden">
                                    <Link to="*">Login</Link>
                                </li>
                                <li>
                                    <Link to="*"><h4>Home</h4></Link>
                                </li>
                                <li data-toggle="modal" data-target="#myModal">
                                    <Link to="">
                                        <h4>Login</h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="container">

                                    <div className="omb_login ">

                                        <div className="row omb_row-sm-offset-3 omb_socialButtons marg">
                                          <h2 className="omb_authTitle">Login or Sign up
                                          </h2>
                                            <div className=" col-xs-4 col-sm-2">
                                                <a href="#" className="btn btn-lg btn-block omb_btn-facebook">
                                                    <i className="fa fa-facebook visible-xs"></i>
                                                    <span className="hidden-xs">Facebook</span>
                                                </a>
                                            </div>
                                            <div className="col-xs-4 col-sm-2 ">
                                                <a href="#" className="btn btn-lg btn-block omb_btn-twitter">
                                                    <i className="fa fa-twitter visible-xs"></i>
                                                    <span className="hidden-xs">Twitter</span>
                                                </a>
                                            </div>
                                            <div className="col-xs-4 col-sm-2 ">
                                                <a href="#" className="btn btn-lg btn-block omb_btn-google">
                                                    <i className="fa fa-google-plus visible-xs"></i>
                                                    <span className="hidden-xs">Google+</span>
                                                </a>
                                            </div>
                                        </div>



                                        <div className="row omb_row-sm-offset-3">
                                            <div className="col-xs-12 col-sm-6">
                                                <form className="omb_loginForm" action="" autocomplete="off" method="POST">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control middle" name="username" placeholder="email address"/>
                                                    </div>
                                                    <span className="help-block"></span>

                                                    <div className="input-group">
                                                        <input type="password" className="form-control middle" name="password" placeholder="Password"/>
                                                    </div>

                                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                                    <span>&nbsp;&nbsp;&nbsp;</span>

                                                    <button className="btn btn-lg btn-primary btn-block submit-modal marg" type="submit">Login</button>
                                                </form>


                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
