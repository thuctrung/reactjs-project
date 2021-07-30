import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./css/price-range.css";
import axios from "axios";
import Card from "./card";
import Category_tab from "./category_tab";
class Content_right extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            data:{text:"jjjj"},
            url: 'http://localhost/react-project/product.php',
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
             this.setState({data:response.data});
             console.log(response);
          })        
          .catch(error => console.error('timeout exceeded'));
      }
      item=()=>{
        let data=[];
        for (let index = 0; index < this.state.data.length; index++) {
            data.push(<Card image={this.state.data[index].image} name={this.state.data[index].name} price={this.state.data[index].price} star="4" review="5"></Card>);
        }
        console.log(data);
        return data;
    }
    render() {
        return (
            <div className="col-sm-9 padding-right">
                <div className="features_items">
						<br/>
						<h2 className="title text-center">NEW PRODUCT</h2>
                    <div className="row">
                       {this.item()}
                    </div>
                </div>
                <Category_tab />
            </div>
        );
    }
}



export default Content_right;