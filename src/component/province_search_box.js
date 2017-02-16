import React,{Component} from 'react'
import {Link} from 'react-router'

export default class ProvSearchBox extends Component{
  render(){
    return(
      <div className="col-sm-3 col-xs-12">
        <aside>
          <div className="panel panel-default packagesFilter">
            <div className="panel-heading">
              <h3 className="panel-title">search</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-12">
                  <div className="searchFilter">
                    <select name="guiest_id3" id="guiest_id3" className="select-drop">
                      <option value="0">Destinations</option>
                      <option value="1">USA</option>
                      <option value="2">UK</option>
                      <option value="3">Canada</option>
                    </select>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="input-group date ed-datepicker filterDate" data-provide="datepicker">
                    <input type="text" className="form-control" placeholder="MM/DD/YYYY"/>
                    <div className="input-group-addon">
                      <span className="fa fa-calendar"></span>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="input-group date ed-datepicker filterDate" data-provide="datepicker">
                    <input type="text" className="form-control" placeholder="MM/DD/YYYY"/>
                    <div className="input-group-addon">
                      <span className="fa fa-calendar"></span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <a href="#" className="btn btn-block buttonTransparent">Search</a>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default packagesFilter">
            <div className="panel-heading">
              <h3 className="panel-title">Price</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-12">
                  <div className="searchFilter">
                    <select name="guiest_id4" id="guiest_id4" className="select-drop">
                      <option value="0">$1000 - $2000</option>
                      <option value="1">$1400 - $2000</option>
                      <option value="2">$1600 - $2000</option>
                      <option value="3">$1800 - $2000</option>
                    </select>
                  </div>
                </div>
                <div className="col-xs-12 priceRange">
                  <div className="price-slider-inner">
                    <span className="amount-wrapper">
                      Price:
                      <input type="text" id="price-amount-1" readonly/>
                      <strong>-</strong>
                      <input type="text" id="price-amount-2" readonly/>
                    </span>
                    <div id="price-range"></div>
                  </div>
                  <input className="btn btn-default" type="submit" value="Filter"/>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    )
  }
}
