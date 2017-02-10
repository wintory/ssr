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
                        <Link to="*">Login</Link>
                    </li>
                    <li>
                    <Link to="*">Home</Link>
                    </li>
                    <li data-toggle="modal" data-target="#myModal">
                        <Link to="login">Login</Link>
                    </li>
                </ul>
            </div>

        </div>

    </nav>
    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Login</h4>
      </div>
      <div className="modal-body">
        <a className="btn btn-block btn-social btn-lg btn-facebook">
   <span className="fa fa-facebook"></span> Sign in with Facebook
        </a>
        <a className="btn btn-block btn-social btn-lg btn-google">
   <span className="fa fa-google"></span> Sign in with Google+
        </a>
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
        <form>
  <fieldset >
    <div className="form-group">
      <label >Email</label>
      <input type="text" className="form-control"/>
    </div>
    <div className="form-group">
      <label >Password</label>
      <input type="password" className="form-control" />
    </div>
    <div className="form-group">
    <button type="button" className="btn btn-default" >Register</button>
    <button type="submit"  className="btn btn-default">Submit</button>
    </div>
  </fieldset>
</form>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>

  );
  }
}
