import React, {Component} from 'react'
import {Link} from 'react-router'

export default class SearchBox extends Component {

    render() {

        return (
            <div>
            <div className="col-sm-7 col-xs-12">
                <div className="col-sm-3 col-xs-12">
                    <div className="searchTour">
                        <select name="guiest_id3" id="guiest_id3" className="select-drop">
                            <option value="0">aaa</option>
                            <option value="1">aaa</option>
                            <option value="2">aaa</option>
                            <option value="3">aaa</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="col-sm-2 col-xs-12 search-btn">
                <a href="province_detail" className="btn btn-block search-btn buttonCustomPrimary">Search</a>
            </div>
        </div>




        )
    }
}
