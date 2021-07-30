import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/styles.css";
import $ from "jquery";
import axios from "axios";
import Function from "../component_small/function";
import DataTables from "../component_small/dataTable";
import Modal_Data from '../Modal/modal_Data';
import Modal_Form from '../Modal/modal_Form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
  } from "react-router-dom";
class Order_Details extends Component {
    a = new Function();
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    callAPI=(form)=>{
        this.a.callAPI("http://localhost/react-project/order.php", form, "POST");
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
        const form = new FormData;
        form.append("id", id1);
        form.append("i", status);
        form.append('status', "setstatus");
        this.callAPI(form);
    }
   

    componentDidMount() {
        var id=this.props.match.params.id.split("=")[1];
        const form=new FormData;
        form.append("id",id);
        if(id!=null){
            axios({
                method:'GET',
                data: form,
                url: 'http://localhost/react-project/order_details.php?id='+id,      
            })
            .then(response => {
                console.log(response.data);
                this.setState({ data: response.data });
            })
        }
       
    }

    render() {
        var table = null;
        if (this.state.data.length > 0) {
            table = <DataTables delete={this.delete} change={this.changePass} delete="none" update="none" data={this.state.data} />;
        }
        return (
            <div>
                <div class="card mb-4">
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
            </div>
        );
    }
}


export default Order_Details
;