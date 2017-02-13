import React, {Component} from 'react'
import {Link} from 'react-router'
import Nav from './nav'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <span className="copyright">MileStyle Copyright &copy; 2017</span>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
