import React,{Component} from 'react'
import {Link} from 'react-router'

export default class DetailHeader extends Component{

  render() {
    return (
      <div>
        <section className="pageTitle detailhead" >
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="titleTable">
              <div className="titleTableInner">
                <div className="pageTitleInfo">
                  <h1>Province Detail</h1>
                  <div className="under-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    );
  }
}
