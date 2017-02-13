import React, {Component} from 'react'
import {Link} from 'react-router'
import ProvCard2 from './prov_card2'
import Card2 from './card2'

export default class HomeDetail extends Component {
    render() {
        return (
            <div>
                <ProvCard2/>
                <Card2 topic="Activity Recommend"/>
            </div>
        )
    }
}
