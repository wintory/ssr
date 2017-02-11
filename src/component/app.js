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
          <Header/>
        <Nav />

        {this.props.children}
          <Footer />

      </div>

    )
  }
}
