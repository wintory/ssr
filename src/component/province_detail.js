import React from 'react'
import {Link} from 'react-router'
import Card2 from './card2'

class ProvinceDetail extends React.Component {
    render() {
        return (
            <div className="marg">
                <div className="container">

                    <h2 className="middle">Province Detail</h2>

                </div>

                <Card2 topic="Sport"/>
                <Card2 topic="Party"/>
                <Card2 topic="All Activity"/>
                <section className="bg-light-gray">
                    <nav aria-label="...">
                        <ul className="pager">
                            <li>
                                <a href="#">
                                    <h4>Previous</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h4>Next</h4>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </section>

            </div>
        )
    }
}
export default ProvinceDetail
