import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ProvCard2 extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="our-listing owl-carousel">
                            <div className="list-item">
                                <div className="list-thumb">

                                    <Link to="province_detail"><img src="http://www.sawasdee-hotels.com/pattaya/siam_sawasdee/images/hotel.jpg" alt="destination 1"/></Link>
                                    <div className="title">
                                        <span>Bangkok</span>
                                    </div>
                                </div>

                            </div>
                            <div className="list-item">
                                <div className="list-thumb">

                                    <Link to="province_detail">
                                        <img src="http://www.artterracotta.com/images/img01.png" alt="destination 1"/></Link>
                                    <div className="title">
                                        <span>Chiangmai</span>
                                    </div>
                                </div>

                            </div>
                            <div className="list-item">
                                <div className="list-thumb">

                                    <Link to="province_detail"><img src="https://images.trvl-media.com/hotels/2000000/1850000/1849100/1849012/1849012_130_b.jpg" alt="destination 1"/></Link>
                                    <div className="title">
                                        <span>Pattaya</span>
                                    </div>
                                </div>

                            </div>
                            <div className="list-item">
                                <div className="list-thumb">

                                    <Link to="province_detail"><img src="https://media.expedia.com/hotels/1000000/530000/527800/527737/527737_17_b.jpg" alt="destination 1"/></Link>
                                    <div className="title">
                                        <span>Phuket</span>
                                    </div>
                                </div>

                            </div>
                            <div className="list-item">
                                <div className="list-thumb">

                                    <Link to="province_detail"><img src="https://yooniqimages.blob.core.windows.net/yooniqimages-data-storage-resizedimagefilerepository/List/20957/dfdbfc19-d3ae-4e61-b113-7051115ecb99/YooniqImages_209579897.jpg" alt="destination 1"/></Link>
                                    <div className="title">
                                        <span>Ayutthaya</span>
                                    </div>
                                </div>

                            </div>
                            <div className="list-item">
                                <div className="list-thumb">

                                    <Link to="province_detail"><img src="http://us.123rf.com/450wm/anekoho/anekoho1203/anekoho120300142/12847637-erawan-waterfall-deep-forest-waterfall-in-kanchanaburi-thailand.jpg?ver=6" alt="destination 1"/></Link>
                                    <div className="title">
                                        <span>Kanchanaburi</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        )

    }
}
