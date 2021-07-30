import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/styles.css";
import $ from "jquery";
import axios from "axios";
import Function from "../component_small/function";
import DataTables from "../component_small/dataTable";
import Modal_Data from '../Modal/modal_Data';
import Modal_Form from '../Modal/modal_Form';

class Admin_company extends Component {
    a = new Function();
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            data: [],
            name: null,
            address: null,
            manager: null,
            license_number: null,
            phone: null,
            email: null
        }
    }
    createForm = () => {
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('address', this.state.address);
        formData.append('manager', this.state.manager);
        formData.append('license', this.state.license_number);
        formData.append('phone', this.state.phone);
        formData.append('email', this.state.email);
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
        form.append("method", "POST");
        console.log(form);
        this.callAPI(form);
    }
    componentWillMount() {

    }
    change = (id1) => {
        this.setState({ id: id1 });
        this.state.data.map(element => {
            if (element.id == id1) {
                document.getElementById('name').value = element.name;
                document.getElementById('address').value = element.address;
                document.getElementById('license_number').value = element.license_number;
                document.getElementById('phone').value = element.phone;
                document.getElementById('manager').value = element.manager;
                document.getElementById('email').value = element.email;
                var key = Object.keys(this.state);
                console.log(key);
                var value = Object.values(element);
                console.log(value);
                for (var i = 2; i < 8; i++) {
                    var set = {};
                    set[key[i]] = value[i - 2];
                    this.setState(set);
                }
            }
        })
        document.getElementById("update").style.overflowX = "auto";
        document.getElementById("update").style.overflowY = "auto";
        $("#update").show();
    }
    callAPI=(form)=>{
        this.a.callAPI("http://localhost/react-project/company.php", form, "POST");
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("code")) == 0)
                alert("Dữ liệu bất đồng bộ!");
            else
                window.location.reload();
        }, 500);
    }
    delete = (id) => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('method', "delete");
        this.callAPI(formData);
    }
    update = (event) => {
        const form = this.createForm();
        form.append("method", "PUT");
        form.append("id", this.state.id);
        this.callAPI(form);
        event.preventDefault();
    }
    componentDidMount() {
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/company.php',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.data = response.data;
                this.setState({ data: response.data });
                console.log(response.data);
            })
    }

    render() {
        var table = null;
        let modal_data1 = [
            <Modal_Data typeIn="text" title="Tên công ty" name="name" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" name="address" title="Địa chỉ công ty" data={this.state.category} change={this.handleInputChange} />,
            <Modal_Data typeIn="text" title="Giám đốc điều hành" name="manager" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" title="Mã số thuế" name="license_number" change={this.handleInputChange} />,
            <Modal_Data typeIn="phone" title="Số điện thoại" name="phone" change={this.handleInputChange} />,
            <Modal_Data typeIn="email" title="Email" name="email" change={this.handleInputChange} />
        ]
        let modal_data2 = [
            <Modal_Data typeIn="text" id="name" title="Tên công ty" name="name" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" id="address" name="address" title="Địa chỉ công ty" data={this.state.category} change={this.handleInputChange} />,
            <Modal_Data typeIn="text" id="manager" title="Giám đốc điều hành" name="manager" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" id="license_number" title="Mã số thuế" name="license_number" change={this.handleInputChange} />,
            <Modal_Data typeIn="phone" id="phone" title="Số điện thoại" name="phone" change={this.handleInputChange} />,
            <Modal_Data typeIn="email" id="email" title="Email" name="email" change={this.handleInputChange} />
        ]
        let modal = <Modal_Form id="my" submit={this.handleSubmit} title_bottom="Thêm công ty đối tác" title_top="Thêm" modal_data={modal_data1} />
        let modal2 = <Modal_Form id="update" submit={this.update} title_bottom="Cập nhật thông tin công ty đối tác" title_top="Cập nhật" modal_data={modal_data2} />
        if (this.state.data.length > 0) {
            table = <DataTables delete={this.delete} change={this.change} data={this.state.data} />;
        }
        return (
            <div>
                <div class="card mb-4">
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#my">Add supply partner</button>
                    <div class="card-header">
                        <i class="fas fa-table mr-1"></i>
                        DataTable Company
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


export default Admin_company;