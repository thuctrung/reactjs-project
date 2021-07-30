import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Header.css";
import Header_top from "./Header-top";
import Header_bottom from "./Header_bottom";
class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="header">
		        <Header_top></Header_top>
                <Header_bottom></Header_bottom>
			</div>
        );
    }
}



export default Header;