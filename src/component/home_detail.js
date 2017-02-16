import React, {Component} from 'react'
import {Link} from 'react-router'
import ProvCard from './prov_card'
import StaticBox from './staticbox'
import Header from './header'
import CardSection from './card_section'
import Nav from './nav'

export default class HomeDetail extends Component {
    render() {
        return (
            <div>
              <Nav/>
              <Header />
              <CardSection/>
              <StaticBox/>
            </div>

        )
    }
}
