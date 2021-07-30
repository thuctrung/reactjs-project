import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/styles.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory,
    Link
  } from "react-router-dom";
//   import history from "./history";
import Card from '../component_small/card';
import Modal_Data from '../Modal/modal_Data';
import Modal_Form from '../Modal/modal_Form';
import Admin_product from '../Pages/admin_product';
import Admin_company from "../Pages/admin_company";
import Admin_Acc_Ad from '../Pages/amin_account_admin';
import Admin_Acc_User from '../Pages/admin_account_user';
import Admin_Order from '../Pages/admin_order';
import Order_Details from '../Pages/order_details';
import Admin_shipping from '../Pages/admin_shipping';
class Layout_right extends Component {
  
    render() {
       
        return (
            <Router>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        
                        <div className="row">
                            <Card name="Product management" link="/product" color="#3366ff"/>
                            <Card name="Supply partner management" link="/company" color="#6633cc"/>
                            <Card name="Account admin management" link="/admin_account" color="##660033"/>
                            <Card name="Account user management" link="/admin_user" color="#FF6666"/>
                            <Card name="Order management" link="/admin_order" color="#00CCCC"/>
                            <Card name="Shipping partners" link="/admin_shipping" color="#FF3333"/>
                        </div>
                        <Switch>
                            <Route exact path="/">
                                <Admin_product/>
                            </Route>
                            <Route path="/product">
                                <Admin_product/>
                            </Route>
                            <Route path="/company">
                                <Admin_company />
                            </Route>
                            <Route path="/admin_account">
                                <Admin_Acc_Ad />
                            </Route>
                            <Route path="/admin_user">
                                <Admin_Acc_User />
                            </Route>
                            <Route path="/admin_order" exact component={Admin_Order}/>
                            <Route path="/admin_shipping" component={Admin_shipping}/>
                            <Route path="/order_details/:id" component={Order_Details}/>
                        </Switch>
                        
                        <div className="card mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xypzmu5mMPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            </Router>
            
        );
    }
}


export default Layout_right;