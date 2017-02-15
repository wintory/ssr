import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Card2 extends React.Component {
    render() {
        return (
            <div>
                <div id="products" className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="section-title black">{this.props.topic}</h2>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-3 col-sm-6">
                              <Link to="activity_detail">
                                <div className="product-item">
                                    <div className="item-thumb">

                                        <div className="overlay">

                                        </div>
                                        <img src="https://assets.goodhousekeeping.co.uk/main/embedded/14605/cooking-at-ghi-cookery-school-04__medium.jpg?20161125114314" alt=""/></div>
                                    <h4>Cooking</h4>
                                    <div>
                                        <span>Bangkok</span>
                                    </div>
                                    <span>Price :
                                        <em className="price">
                                            1800.00 Baht</em>
                                    </span>
                                </div>
                                    </Link>
                            </div>

                          
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
