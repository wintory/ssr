import React, {Component} from 'react'
import {Link} from 'react-router'
import Nav from './nav'
import Header from './header'
import {AppContainer} from 'react-hot-loader'
import Footer from './footer'

export default class App extends React.Component {
    render() {
        return (
            <div className="bg-light-gray">
              <Nav />
                <Header/>
                {this.props.children}
                <Footer/>

            </div>

        )
    }
}
