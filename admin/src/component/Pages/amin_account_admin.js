import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/styles.css";
import $ from "jquery";
import axios from "axios";
import Function from "../component_small/function";
import DataTables from "../component_small/dataTable";
import Modal_Data from '../Modal/modal_Data';
import Modal_Form from '../Modal/modal_Form';

class Admin_Acc_Ad extends Component {
    a = new Function();
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            data: [],
            email:null,
            password: null,
            status: null
        }
    }
    createForm = () => {
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('sta', this.state.status);
        return formData;
    }
    handleInputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const form = this.createForm();
        form.append("status", "add");
        console.log(form);
        this.callAPI(form);
    }
    componentWillMount() {

    }
    callAPI=(form)=>{
        this.a.callAPI("http://localhost/react-project/account_admin.php", form, "POST");
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("code")) == 0)
                alert("Dữ liệu bất đồng bộ!");
            else
                window.location.reload();
        }, 500);
    }
    change = (id1, status) => {
        if(status=="1")
        status="0";
        else
        status="1";
        const form = this.createForm();
        form.append("id", id1);
        form.append("i", status);
        form.append('status', "setstatus");
        this.callAPI(form);
    }
    changePass = (id1) => {
        this.setState({ id: id1 });
        this.state.data.map(element => {
            if (element.id == id1) {
                document.getElementById('email').value = element.email;
                document.getElementById('password').value = element.password;
                var key = Object.keys(this.state);
                // console.log(key);
                var value = Object.values(element);
                // console.log(value);
                for (var i = 2; i < 8; i++) {
                    
                    var set = {};
                    set[key[i]] = value[i - 1];
                    this.setState(set);
                }
            }
        })
        document.getElementById("update").style.overflowX = "auto";
        document.getElementById("update").style.overflowY = "auto";
        $("#update").show();
    }

    delete = (id) => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("status", "delete");
        this.callAPI(formData);
    }
    update = (event) => {
        const form = this.createForm();
        form.append("status", "reset");
        form.append("id", this.state.id);
        form.append("id", this.state.id);

        this.callAPI(form);
        event.preventDefault();
    }
    componentDidMount() {
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/account_admin.php',      
        })
        .then(response => {
            this.setState({ data: response.data });
        })
    }

    render() {
        var table = null;
        let modal_data1 = [
            <Modal_Data typeIn="email" title="Email" name="email" change={this.handleInputChange} />,
            <Modal_Data typeIn="password" name="password" title="Password" change={this.handleInputChange} />,
            <Modal_Data typeIn="select" data={[{id:"Accept","Accept":"Accept"},{id:"Not Accept","Not Accept":"Not Accept"}]} title="Status" name="status" change={this.handleInputChange} />
        ]
        let modal_data2 = [
            <Modal_Data typeIn="text" id="email" read="true" title="Email" name="name" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" id="password" read="true" name="password" title="Mật khẩu" />,
            <Modal_Data typeIn="text" name="password" title="New password" change={this.handleInputChange} />,
        ]
        let modal = <Modal_Form id="my" submit={this.handleSubmit} title_bottom="Add admin account" title_top="Add" modal_data={modal_data1} />
        let modal2 = <Modal_Form id="update" submit={this.update} title_bottom="Change password" title_top="Change" modal_data={modal_data2} />
        if (this.state.data.length > 0) {
            table = <DataTables delete={this.delete} change={this.changePass} changeStatus={this.change} data={this.state.data} />;
        }
        return (
            <div>
                <div class="card mb-4">
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#my">Add Account Admin</button>
                    <div class="card-header">
                        <i class="fas fa-table mr-1"></i>
                        DataTable Account Admin
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            {table}
                        </div>
                    </div>
                </div>
                {modal}
                {modal2}
            </div>
        );
    }
}


export default Admin_Acc_Ad
;