import React,{Component} from 'react'
import Card from './card'

export default class CardSection extends Component{

  constructor(props){
    super(props)
      this.state ={
        activity_title : "Activity You May Know"
      }
  }

  render(){

    let {activity_title} = this.state
    return(
      <div>
        <section className="mainContentSection packagesSection">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="sectionTitle">
                  <h2><span className="lightBg">{activity_title}</span></h2>
                </div>
              </div>
            </div>
            </div>
            <div className="row margin">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />

            </div>
                </section>
                </div>
    )


  }
}
