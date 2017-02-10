import React,{Component} from 'react'
import {Link} from 'react-router'
import ProvCard from './prov_card'
import Card from './card'

export default class HomeDetail extends Component{
  render(){
    return(
      <div>
        <ProvCard />
      <Card line="Activity Recommend"/>
      </div>
    )
  }
}
