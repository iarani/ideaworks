import React, { Component } from 'react';

export default class Separator extends Component {
    render() {
        return (
            <div className="row my-3">
                <div className="col-md-12 p-0" >
                    <div className="mb-5" style={{borderTop: '4px dotted red', height:'10px'}}></div>
                </div>
            </div>
        )
    }
}