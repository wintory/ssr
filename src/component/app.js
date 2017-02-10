import React,{Component} from 'react'
import {Link} from 'react-router'
import Nav from './nav'
import Header from './header'
import Home from './home'
import { AppContainer } from 'react-hot-loader'
import Footer from './footer'


export default class App extends React.Component{
  render(){
    return(
      <div>
          <img src="https://www.familytour.co.il/wp-content/uploads/2017/01/grand-palace-1822487_1920-1500x500.jpg"/>
        <Nav />
        {this.props.children}
          <Footer />

      </div>

    )
  }
}
