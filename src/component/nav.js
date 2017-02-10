import React,{Component} from 'react'
import {Link} from 'react-router'



export default class Nav extends React.Component{



  render(){
    return (
      <div>
        <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">

        <div className="container">

            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">MileStyle</a>
            </div>
<form className="navbar-form navbar-left" role="search">
            <div className="form-group">
   <input type="text" className="form-control"  placeholder="Search"/>
 </div>
 <button type="submit" className="btn btn-default">search</button>
</form>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>

        </div>

    </nav>
      </div>

  );
  }
}
