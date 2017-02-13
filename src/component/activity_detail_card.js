import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ActivityDetailCard extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="panel panel-white post panel-shadow">
                                <div className="det">
                                    <h4>Location : Phuket</h4>
                                    <h4>Price : 7500 Baht</h4>
                                    <h4>Date: 13/9/2017</h4>
                                    <span>Description: </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
