import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";
class Modal_Form extends Component {
    constructor(props) {
        super(props);

    }

    close=()=>{
        $("#my").hide();
        window.location.reload();
        // alert(this.case);
    }
    render() {
        return (
            <div id={this.props.id} style={{ display: "none" }} className="modal">
                <div className="modal-content">
                    <button onClick={this.close}> <h3>Đóng</h3> </button>
                    <form onSubmit={this.props.submit} id="form" enctype="multipart/form-data">
                        <div className="modal-header">
                            <h1> {this.props.title_top} </h1></div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        {this.props.modal_data.map(element=>{
                                            return(element);
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" style={{backgroundColor:"#007bff"}} id="add" value="add" className="btn btnprimary btn-lg" name="add">
                                {this.props.title_bottom} </button> </div>
                    </form>
                </div>
            </div >
        );
    }
}


export default Modal_Form;