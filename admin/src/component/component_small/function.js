import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
class Function extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    callAPI = (urlAPI, data1, method) => {
        var headers = {
            'Content-Type': 'application/json'
        }
        let datar = [];
        axios({
            method: method,
            data: data1,
            headers: headers,
            url: urlAPI    // 4 seconds timeout          
        })
            .then(response => {
                const gg = new Promise((resolve, reject) => {
                    resolve(localStorage.setItem("code", response.data));
                });
                gg.then(console.log(response.data))
            })
            .catch(console.log("sorry"));
    }
    Product = (formData) => {
        this.callAPI('http://localhost/react-project/product.php', formData, "POST")

    }
    Register = (formData) => {
        this.callAPI('http://localhost/react-project/account.php', formData, "POST")
    }
}
export default Function;