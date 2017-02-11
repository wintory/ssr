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
                                    <h3>Location : Phuket</h3>
                                    <h3>Price : 7500 Baht</h3>
                                    <h3>Date: 13/9/2017</h3>
                                    <h4>Description: Fiction is a form of narrative, one of the four rhetorical modes of discourse. Fiction-writing also has modes: action, exposition, description, dialogue, summary, and transition (Morrell 2006, p. 127). Author Peter Selgin refers to methods, including action, dialogue, thoughts, summary, scenes, and description (Selgin 2007, p. 38). Currently, there is no consensus within the writing community regarding the number and composition of fiction-writing modes and their uses. Description is the fiction-writing mode for transmitting a mental image of the particulars of a story. Together with dialogue, narration, exposition, and summarization, description is one of the most widely recognized of the fiction-writing modes. As stated in Writing from A to Z, edited by Kirk Polking, description is more than the amassing of details; it is bringing something to life by carefully choosing and arranging words and phrases to produce the desired effect (Polking 1990, p. 106). The most appropriate and effective techniques for presenting description are a matter of ongoing discussion among writers and writing coaches.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
