import React from 'react'
import {Link} from 'react-router'
import Card from './card'

class ProvinceDetail extends React.Component{
  render(){
    return(
        <div>
          <section id="portfolio" className="bg-light-gray">
            <div className="container">
          <h1 className="middle">Province Detail</h1>
            <div className="dropdown">
    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Type
      <span className="caret"></span>
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
      <li><a href="#">Adventure</a></li>
      <li><a href="#">Music</a></li>
      <li><a href="#">Sport</a></li>
      <li><a href="#">Cooking</a></li>
    </ul>
  </div>
</div></section>

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
