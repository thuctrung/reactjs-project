import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

class Category_tab extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            product:[]
        }
        this.product=this.product.bind(this);
    }
    product=(id)=>{
alert(id);
    }
    componentDidMount() {
        axios({
            method: 'GET',
            data:null,
            url: 'http://localhost/react-project/category.php',
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
             this.setState({data:response.data});
             console.log(response);
          })        
          .catch(error => console.error('timeout exceeded'));
      }
    
    render() {
        return (
            <div className="category-tab">
                <h2 className="title text-center">PRODUCT CATEGORY</h2>
                <div className="col-sm-12">
                    <ul className="nav nav-tabs">
                        

                        {/* <button onClick={alert("kk")}></button> */}
                    </ul>
                </div>
                <div className="tab-content">

                </div>
            </div>
                    
        );
    }
}



export default Category_tab;