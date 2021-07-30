import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {hh} from "./script.js";
class Header_bottom extends Component {
    constructor(props) {
        super(props);

    }
    handleResize() {
        hh.hh();
    }
        render() {
        return (
            <div class="header_bottom">
			<div class="wrap">
				<div class="image-slider">
					<ul class="rslides" id="slider1">
						<li><img src="./images/7.jpg" alt="" /></li>
						<li><img src="./images/2.jpg" alt="" /></li>
						<li><img src="./images/1.jpg" alt="" /></li>
						<li><img src="./images/3.jpg" alt="" /></li>
						
					</ul>
				</div>
			</div>
		</div>
        );
    }
}



export default Header_bottom;