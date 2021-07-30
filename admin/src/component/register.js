import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import $ from "jquery";
import Function from "./component_small/function";
// import history from "history";
class Testdata extends Component {
    constructor(props) {
        super(props);
        this.state={
            phone:null,
            email:null,
            user:null,
            password:null,
            confirm:null,
            code:null
        }
    }
    createForm=()=>{
        const formData = new FormData();
        formData.append('phone', this.state.phone);
        formData.append('email', this.state.email);
        formData.append('user', this.state.user);
        formData.append('password', this.state.password);
        
        return formData;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.password==this.state.confirm){
            const form = this.createForm();
            form.append("method", "POST");
            form.append('status', "send");
            console.log(form);
            Function.Register(form);
            
                $("#con").show();
            
        }
        
    }
    create = (event) => {
        event.preventDefault();
        let code=JSON.parse(localStorage.getItem("code"));
        if(this.state.code==code){
            const form = this.createForm();
            form.append("method", "POST");
            form.append('status', "in");
            console.log(form);
            Function.Register(form);
        }
        else{
            alert("Mã xác thực không đúng!")
        }
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
            <button style={{ marginTop: "50px" }} type="button" id="show" className="btn btn-primary btn-lg"  data-toggle="modal" data-target="#myModal"> Add product </button>
            <div id="myModal" style={{ display: "none" }} className="modal">
                <div className="modal-content">
                    <button class="close" data-dismiss="modal" aria-label="Close"> <h3>Đóng</h3> </button>
                    <form onSubmit={this.handleSubmit} id="form" enctype="multipart/form-data">
                        <div className="modal-header">
                            <h1> Thêm sản phẩm </h1></div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label for=""> Số điện thoại </label><br />
                                        <input type="text" name="phone" onChange={this.handleInputChange} required /> <br/>
                                        <label for=""> Email </label><br />
                                        <input type="email" min="0" name="email" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> User name </label><br />
                                        <input type="text" min="0" name="user" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> Password </label><br />
                                        <input type="text" min="0" name="password" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> Confirm password </label>
                                        <input type="text" name="confirm" id="" onChange={this.handleInputChange} required /> <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" style={{backgroundColor:"#007bff"}} id="add" value="add" className="btn btnprimary btn-lg" name="add">
                                Thêm Sản Phẩm </button> </div>
                    </form>
                </div>
            </div >
            <div class="modal" id="con" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Verification code</h5>
                        <button type="button" onClick={this.hide} class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={this.create}>
                    <div class="modal-body">
                        <label for=""> Code </label><br />
                        <input type="text" name="code" onChange={this.handleInputChange} required /> <br/>
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