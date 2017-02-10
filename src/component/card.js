import React,{Component} from 'react'
import {Link} from 'react-router'


export default class Card extends React.Component{
  render(){
    return(
      <div className="container">
    <div className="row">
      <table>
        <tr>
          <td>
            <div className="card">
                <div className="card-image">
                    <img className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Bangkok_skytrain_sunset.jpg"></img>
                </div>
                <span className="card-title"></span>

            </div>
            </td>
            <td>
              <div className="card">
                  <div className="card-image">
                      <img className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Bangkok_skytrain_sunset.jpg"></img>
                  </div>
                  <span className="card-title"></span>

              </div>
            </td>
            <td>
              <div className="card">
                  <div className="card-image">
                      <img className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Bangkok_skytrain_sunset.jpg"></img>
                  </div>
                  <span className="card-title"></span>

              </div>
            </td>
            <td>
              <div className="card">
                  <div className="card-image">
                      <img className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Bangkok_skytrain_sunset.jpg"></img>
                  </div>
                  <span className="card-title"></span>

              </div>
            </td>
            </tr>
            </table>

    </div>
</div>
    )
  }
}
