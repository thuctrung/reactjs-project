import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routes from "./routes.js";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Header_top extends Component {
    constructor(props) {
        super(props);

    }
    showContent=(routes)=>{
        var result=null;
        if(routes.length>0){
          result=routes.map((router, index)=>{
            return (<Route key={index}
            path={router.path}
            exact={router.exact}
            component={router.main}/>);
          });
        }
        return result;
      };
    render() {
        return (
            <Router>
            <div class="header_wrapper">
			<div class="wrap">
				<div class="header_top">
					<div class="logo">
						<a href="index.html"><img src="images/logo.png" alt="" /></a>
					</div>
					<div class="menu">
						<ul>
							<li><Link to="/home">Home</Link></li>
							<li><Link to="/product">Product</Link></li>
							<li><Link to="/blog">Blog</Link></li>
							<li><Link to="/contact">Contact</Link></li>
							<li><a href="services.html">SERVICES</a></li>
							<li><a href="contact.html">CONTACTS</a></li>
							<div class="clear"></div>
						</ul>

					</div>
					<div class="clear"></div>
				</div>
			</div>
            
		</div>
        </Router>
        );
    }
}


export default Header_top;