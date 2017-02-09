import Reac,{Component} from 'react'
import {Link} from 'react-router'
import Card from './card.js'
import ProvCard from './prov_card'
import Card from './card'

export default class HomeDetail extends React.Component{
  render(){
    return(
      <ProvCard />
      <Card />
    )
  }
}
