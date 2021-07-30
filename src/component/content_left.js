import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./css/price-range.css";
import axios from "axios";
class Content_left extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            category:[]
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/category',
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
            this.setState({category:response.data});
            console.log(response.data);
          })        
          .catch(error => console.error('timeout exceeded'));
      }
    render() {
        return (
            <div className="col-sm-3">
					<div className="left-sidebar">
						<br/>
						<h2>Category</h2>
					
						<div className="panel-group category-products" id="accordian">
                            {this.state.category.map(element=>{
                                return(<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">{element.name}</a></h4>
								</div>
							</div>
                                )
                            })}
							
						</div>
					
						<div className="brands_products">
							<h2>Brands</h2>
							<div className="brands-name">
								<ul className="nav nav-pills nav-stacked">
									<li><a href="#"> <span className="pull-right">(50)</span>Acne</a></li>
									<li><a href="#"> <span className="pull-right">(56)</span>Grüne Erde</a></li>
									<li><a href="#"> <span className="pull-right">(27)</span>Albiro</a></li>
									<li><a href="#"> <span className="pull-right">(32)</span>Ronhill</a></li>
									<li><a href="#"> <span className="pull-right">(5)</span>Oddmolly</a></li>
									<li><a href="#"> <span className="pull-right">(9)</span>Boudestijn</a></li>
									<li><a href="#"> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
								</ul>
							</div>
						</div>
						
						
						<div className="shipping text-center">
							<img src="images/home/shipping.jpg" alt="" />
						</div>
					
					</div>
				</div>
        );
    }
}



export default Content_left;