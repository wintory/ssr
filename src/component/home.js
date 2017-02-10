import React,{Component} from 'react'
import {Link} from 'react-router'
import Nav from './nav'
import ProvCard from './prov_card'
import Footer from './footer'
import Card from './card'
export default class Home extends React.Component{
  render(){
    return(
      <div>
        <ProvCard />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Footer />
      </div>
    )
  }
}
