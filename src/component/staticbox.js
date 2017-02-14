import React,{Component} from 'react'

export default class StaticBox extends Component{
  render(){
    return(
      <div>

        <div className="container">
           <div className="statistics-box">
              <div className="statistics-item">
                 <span className="value">1000</span>
                 <p className="title">Destinations</p>
              </div>

              <div className="statistics-item">
                 <span className="value">77</span>
                 <p className="title">Cities</p>
              </div>

              <div className="statistics-item">
                 <span className="value">35,000</span>
                 <p className="title">Activity</p>
              </div>

              <div className="statistics-item">
                 <span className="value">5,000</span>
                 <p className="title">User</p>
              </div>
           </div>
        </div>

      </div>
    )
  }
}
