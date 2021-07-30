import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./css/animate.css";
import  "./css/beauty.css";
import  "./css/main.css";
import  "./css/beauty.css";
import  "./css/price-range.css";
import  "./css/responsive.css";
import  "./css/font-awesome.min.css";
import Content_left from "./content_left";
import Content_right from "./content_right";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Content extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div class="container">
			    <div className="row">
                    <Content_left/>
                    <Content_right/>
                </div>
            </div>
            
        );
    }
}


export default Content;