import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="col-xl-3 col-md-6" >
                <div className="card bg-warning text-white mb-4" >
                    <div className="card-body" style={{ backgroundColor: this.props.color }}>{this.props.name}</div>
                    <div className="card-footer d-flex align-items-center justify-content-between" style={{ backgroundColor: this.props.color }}>
                        <Link to={this.props.link} className="small text-white stretched-link">View Details</Link>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Card;