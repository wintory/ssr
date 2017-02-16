import React, {Component} from 'react'
import {Link} from 'react-router'

export default class CommentInput extends React.Component {

    render() {
        return (
            <div>
                <div className="form-group ">
                    <label for="comment">Comment:</label>
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                  
                </div>
            </div>

        )
    }
}
