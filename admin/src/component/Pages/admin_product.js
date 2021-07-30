import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/styles.css";
import $ from "jquery";
import axios from "axios";
import Function from "../component_small/function";
import DataTables from "../component_small/dataTable";
import Modal_Data from '../Modal/modal_Data';
import Modal_Form from '../Modal/modal_Form';

class Admin_product extends Component {
    data = [];
    modal=null;
    data_modal = [];
    data_modal2 = [];
    a = new Function();
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: null,
            name_product: "",
            quantity_product: "null",
            price_product: "null",
            discount_price_product: "null",
            title: "null",
            ED: "null",
            MFG: "null",
            image: "null",
            mass_product: "null",
            categories: "null",
            company_name: "null",

            category: [],
            company: []

        }
    }

    click = (jj) => {
        $("#con").show();
        alert(jj);
    }
    createForm = () => {
        const formData = new FormData();
        formData.append('name-product', this.state.name_product);
        formData.append('category', this.state.categories);
        formData.append('id', this.state.id);
        formData.append('price-product', this.state.price_product);
        formData.append('discount', this.state.discount_price_product);
        formData.append('quantity', this.state.quantity_product);
        formData.append('mass', this.state.mass_product);
        formData.append('ED', this.state.ED);
        formData.append('MFG', this.state.MFG);
        formData.append('title', this.state.title);
        if (this.state.image != "null")
            formData.append('image-product', this.state.image);
        formData.append('company', this.state.company_name);

        return formData;
    }
    handleInputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleImage = (event) => {
        this.setState({
            image: event.target.files[0]
        });
    }
    delete = (id) => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('method', "delete");
        this.a.Product(formData);
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("code")) == 0)
                alert("Dữ liệu bất đồng bộ!");
            else
                window.location.reload();
        }, 2000);
    }
    hideModal = () => {
        $("#myModal").hide();
        window.location.reload();
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const form = this.createForm();
        form.append("method", "POST");
        console.log(form);
        this.a.Product(form);
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("code")) == 0)
                alert("Dữ liệu bất đồng bộ!");
            else
                window.location.reload();
        }, 2000);
    }
    updateProduct = (event) => {
        const form = this.createForm();
        form.append("method", "PUT");
        this.a.Product(form);
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("code")) == 0)
                alert("Dữ liệu bất đồng bộ!");
            else
                window.location.reload();
        }, 2000);
        event.preventDefault();
    }

    change = (id1) => {
        this.setState({ id: id1 });
        this.state.data.map(element => {
            if (element.id == id1) {
                document.getElementById('name').value = element.name;
                document.getElementById('title').value = element.title;
                console.log(element.title);
                document.getElementById('price').value = element.price;
                document.getElementById('discount').value = element.sell_price;
                document.getElementById('img').src = element.image;
                document.getElementById('img').style.display="block";
                document.getElementById('quantity').value = parseInt(element.quantity);
                document.getElementById('MFG').value = element.MFG;
                document.getElementById('ED').value = element.ED;
                document.getElementById('mass').value = element.mass;
                var key = Object.keys(this.state);
                console.log(key);
                var value = Object.values(element);
                console.log(value);
                for (var i = 2; i < 13; i++) {
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
    componentDidMount() {
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/product.php',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.data = response.data;
                this.setState({ data: response.data });
                // console.log(response.data);
            })
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/category.php',
            timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ category: response.data });
                console.log(response);
            })
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/company.php',
            timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ company: response.data });
                console.log(response);
            })

    }

    render() {
        var table = null;
        var modal2 = null;
        if (this.state.data.length > 0) {
            table = <DataTables delete={this.delete} change={this.change} data={this.state.data} />;
        }
        if (this.state.category.length > 0) {
            this.data_modal = [
                <Modal_Data typeIn="text" id="name" title="Nhập tên sản phẩm" name="name_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="select" id="title" name="categories" title="Danh mục sản phẩm" data={this.state.category} change={this.handleInputChange} />,
                <Modal_Data typeIn="number" id="price" title="Giá nhập sản phẩm" name="price_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="number" id="discount" title="Giá bán" name="discount_price_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="number" id="quantity" title="Số lượng sản phẩm" name="quantity_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="number"id="mass" title="Khối lượng sản phẩm" name="mass_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="date" id="ED" title="Ngày sản xuất" name="ED" change={this.handleInputChange} />,
                <Modal_Data title="Hạn sử dụng" id="MFG" typeIn="date" name="MFG" change={this.handleInputChange} />,
                <Modal_Data typeIn="select" id="company" name="company_name" title="Công ty sản xuất" data={this.state.company} change={this.handleInputChange} />,
                <Modal_Data typeIn="file" name="image" change={this.handleImage} />,
                <Modal_Data typeIn="image" name="image" change={this.handleImage} />,
                <Modal_Data typeIn="textarea" id="title" title="Mô tả sản phẩm" name="title" change={this.handleInputChange} />
            ]
            this.data_modal2 = [
                <Modal_Data typeIn="text"  title="Nhập tên sản phẩm" name="name_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="select"  name="categories" title="Danh mục sản phẩm" data={this.state.category} change={this.handleInputChange} />,
                <Modal_Data typeIn="number"  title="Giá nhập sản phẩm" name="price_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="number"  title="Giá bán" name="discount_price_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="number"  title="Số lượng sản phẩm" name="quantity_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="number" title="Khối lượng sản phẩm" name="mass_product" change={this.handleInputChange} />,
                <Modal_Data typeIn="date"  title="Ngày sản xuất" name="ED" change={this.handleInputChange} />,
                <Modal_Data title="Hạn sử dụng"  typeIn="date" name="MFG" change={this.handleInputChange} />,
                <Modal_Data typeIn="select"  name="company_name" title="Công ty sản xuất" data={this.state.company} change={this.handleInputChange} />,
                <Modal_Data typeIn="file" name="image" change={this.handleImage} />,
                <Modal_Data typeIn="image" name="image" change={this.handleImage} />,
                <Modal_Data typeIn="textarea" title="Mô tả sản phẩm" name="title" change={this.handleInputChange} />
            ]
        }
        if (this.data_modal.length > 0) {
            this.modal = <Modal_Form id="my" submit={this.handleSubmit} title_bottom="Thêm sản phẩm" title_top="Thâm sản phẩm" modal_data={this.data_modal2} />
            modal2=<Modal_Form id="update" submit={this.updateProduct} title_bottom="Cập nhật thông tin sản phẩm" title_top="Cập nhật" modal_data={this.data_modal} />
        }
        return (
            <div>
                <div class="card mb-4">
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#my">Add product</button>
                    <div class="card-header">
                        <i class="fas fa-table mr-1"></i>
                        DataTable product
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            {table}
                        </div>
                    </div>
                </div>
                {this.modal}
                {modal2}
            
            </div>

        );
    }
}


export default Admin_product;