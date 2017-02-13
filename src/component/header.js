import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="active item"><img src="http://www.baankrupu.com/wp-content/uploads/2015/12/ampawa1.jpg"/></div>
                        <div className="item"><img src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAiXAAAAJDE4MDc2MGY3LTZhM2QtNDI3Zi04YmQzLThlMWIxOTNkZjIwNg.jpg"/></div>
                        <div className="item"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Bangkok_skytrain_sunset.jpg"/></div>
                    </div>

                    <a className="carousel-control left" href="#carousel" data-slide="prev"></a>
                    <a className="carousel-control right" href="#carousel" data-slide="next"></a>
                </div>
                <div className="hero">
                    <hgroup>
                        <h1>Milestyle</h1>
                        <h3>Activity Hobby Experience</h3>
                    </hgroup>
                </div>
            </div>
        )
    }
}
