import React from 'react'
import {Link} from 'react-router'
import Card from './card'

class ProvinceDetail extends React.Component{
  render(){
    return(
        <div className="marg">
            <div className="container">

          <h1 className="middle">Province Detail</h1>


  <div className="btn-group marg">
  <a className="btn dropdown-toggle black" data-toggle="dropdown" href="#">
    Action
    <span className="caret"></span>
  </a>
  <ul className="dropdown-menu">
    <li><a href="#">Adventure</a></li>
    <li><a href="#">Music</a></li>
    <li><a href="#">Sport</a></li>
    <li><a href="#">Cooking</a></li>
  </ul>
</div>

</div>

          <Card line="Sport"/>
          <Card line="Party"/>
          <Card line="All Activity"/>
          <section className="bg-light-gray">
            <nav aria-label="...">
      <ul className="pager">
        <li><a href="#"><h4>Previous</h4></a></li>
        <li><a href="#"><h4>Next</h4></a></li>
      </ul>
    </nav>
    </section>

          <Link to="/activity_detail">go page Acc</Link>
        </div>
    )
  }
}
export default ProvinceDetail
