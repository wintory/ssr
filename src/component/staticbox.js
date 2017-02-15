import React,{Component} from 'react'

export default class StaticBox extends Component{

  constructor(props){
      super(props)
      this.state = {
        user : 760,
        activity : 1208,
        destination : 1208
      }
      setInterval(()=> {
        this.setState({destination: this.state.destination+1})
      }, 1000);
      setInterval(()=> {
        this.setState({activity : this.state.activity+1})
      }, 1000)
      setInterval(()=>{
        this.setState({user : this.state.user+1})
      }, 5000)

  }

  render(){
    let {user,activity,destination} = this.state
    return(
      <div>
    <section className="promotionWrapper">
        <div className="container container-statictic">
           <div className="statistics-box">
              <div className="statistics-item">
                 <span className="value">{destination}</span>
                 <p className="title">Destinations</p>
              </div>

              <div className="statistics-item">
                 <span className="value">77</span>
                 <p className="title">Cities</p>
              </div>

              <div className="statistics-item">
                 <span className="value">{activity}</span>
                 <p className="title">Activity</p>
              </div>

              <div className="statistics-item">
                 <span className="value">{user}</span>
                 <p className="title">User</p>
              </div>
           </div>
        </div>

</section>
      </div>
    )
  }
}
