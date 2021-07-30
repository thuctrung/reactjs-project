import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import $ from "jquery";
import Function from "./component_small/function";
import { CommonLoading } from 'react-loadingg';
// import history from "history";
class Testdata extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            email:null,
            password:null
        }
    }
    createForm=()=>{
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('status', "login");
        return formData;
    }
    handleSubmit =(event)=>{
        let a=new Function();
        event.preventDefault();
        const form = this.createForm();
        a.Register(form);
        
        setTimeout(this.check, 1000);
    }
    check=()=>{
        if(JSON.parse(localStorage.getItem("code")==0))
                alert("Thông tin đăng nhập không đúng!");
    }

    handleInputChange = (event) => {
        let value = event.target.value;

        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    hide=()=>{
        $("#con").hide();
    }
    
    render() {
        return (
            <div>
                
            <button style={{ marginTop: "50px" }} type="button" id="show" className="btn btn-primary btn-lg"  data-toggle="modal" data-target="#con"> Add product </button>
            <div class="modal" id="con" tabindex="-1" role="dialog">
            
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">LOGIN</h5>
                        <button type="button" onClick={this.hide} class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <div class="modal-body">
                        <label for=""> Email </label><br />
                        <input type="email" name="email" onChange={this.handleInputChange} required /> <br/>
                        <label for=""> Password </label><br />
                        <input type="password" name="password" onChange={this.handleInputChange} required /> <br/>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            
        </div >
        );
    }
}

export default Testdata;