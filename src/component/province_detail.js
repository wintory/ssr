import React from 'react'
import {Link} from 'react-router'
import Card from './card'

class ProvinceDetail extends React.Component {
    render() {
        return (
            <div className="marg">
                <div className="container">


                </div>

                <Card topic="Sport"/>
            
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
