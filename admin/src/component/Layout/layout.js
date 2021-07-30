import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout_left from "./layout_left";
import Layout_right from "./layout_right";
// import history from "./history";
class Layout extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Router>
                <div id="layoutSidenav">
                    <Layout_left />
                    <Switch>
                            <Route exact path="">
                            <Layout_right />
                            </Route>
                            
                            <Route path="/about">
                                <div>kkkk</div>
                            </Route>
                            <Route path="/company">
                                
                            </Route>
                            <Route path="/admin_account">
                                
                            </Route>
                            
                    </Switch>
                    
                </div>
            </Router>
        );
    }
}


export default Layout;