import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/styles.css";
import $ from "jquery";
import axios from "axios";
import Function from "../component_small/function";
import DataTables from "../component_small/dataTable";
import Modal_Data from '../Modal/modal_Data';
import Modal_Form from '../Modal/modal_Form';

class Admin_shipping extends Component {
    a = new Function();
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            data: [],
            code:null,
            name: null,
            address: null,
            phone: null,
            area:null,
            manager: null,
            email: null
        }
    }
    createForm = () => {
        const formData = new FormData();
        formData.append('code', this.state.code);
        formData.append('name', this.state.name);
        formData.append('address', this.state.address);
        formData.append('manager', this.state.manager);
        formData.append('area', this.state.area);
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
                document.getElementById('code').value = element.code;
                document.getElementById('name').value = element.name;
                document.getElementById('address').value = element.address;
                document.getElementById('area').value = element.area;
                document.getElementById('phone').value = element.phone;
                document.getElementById('manager').value = element.manager;
                document.getElementById('email').value = element.email;
                var key = Object.keys(this.state);
                console.log(key);
                var value = Object.values(element);
                console.log(value);
                for (var i = 2; i < 9; i++) {
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
        this.a.callAPI("http://localhost/react-project/shipping.php", form, "POST");
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("code")) == 0)
                alert("Dữ liệu bất đồng bộ!");
            else
                window.location.reload();
        }, 500);
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
            url: 'http://localhost/react-project/shipping.php',
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
            <Modal_Data typeIn="text" title="Code" name="code" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" title="Name company" name="name" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" name="address" title="Address" data={this.state.category} change={this.handleInputChange} />,
            <Modal_Data typeIn="text" title="Manager" name="manager" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" title="Area" name="area" change={this.handleInputChange} />,
            <Modal_Data typeIn="phone" title="Phone" name="phone" change={this.handleInputChange} />,
            <Modal_Data typeIn="email" title="Email" name="email" change={this.handleInputChange} />
        ]
        let modal_data2 = [
            <Modal_Data typeIn="text" id="code" title="Code" name="code" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" id="name" title="Name company" name="name" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" id="address" name="address" title="Address company" data={this.state.category} change={this.handleInputChange} />,
            <Modal_Data typeIn="text" id="manager" title="Giám đốc điều hành" name="manager" change={this.handleInputChange} />,
            <Modal_Data typeIn="text" id="area" title="Area" name="area" change={this.handleInputChange} />,
            <Modal_Data typeIn="phone" id="phone" title="Phone" name="phone" change={this.handleInputChange} />,
            <Modal_Data typeIn="email" id="email" title="Email" name="email" change={this.handleInputChange} />
        ]
        let modal = <Modal_Form id="my"  submit={this.handleSubmit} title_bottom="Add shipping partner" title_top="Add shipping partner" modal_data={modal_data1} />
        let modal2 = <Modal_Form id="update" submit={this.update} title_bottom="Update shipping partner" title_top="Update shipping partner" modal_data={modal_data2} />
        if (this.state.data.length > 0) {
            table = <DataTables delete={this.delete} delete="none" change={this.change} data={this.state.data} />;
        }
        return (
            <div>
                <div class="card mb-4">
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#my">Add supply shipping partner</button>
                    <div class="card-header">
                        <i class="fas fa-table mr-1"></i>
                        DataTable Shipping Company
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


export default Admin_shipping;