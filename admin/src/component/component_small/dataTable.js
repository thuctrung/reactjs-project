import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import $ from "jquery";
import importScripts from 'import-scripts';
class DataTables extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
    }
    componentDidMount() {

    }
    render() {
        var keye = Object.keys(this.props.data[0]);
        console.log(this.props.change);
        return (
            <div>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        {keye.map(element => {
                            return (<th>{element.toUpperCase()}</th>)
                        })}
                        <th></th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        {keye.map(element => {
                            return (<th>{element.toUpperCase()}</th>)
                        })}
                        <th></th>
                    </tr>
                </tfoot>
                <tbody>
                    {this.props.data.map(value1 => {
                        return (<tr>
                            {Object.values(value1).map((value, key) => {
                                if (keye[key] == "image")
                                    return <td><img style={{ width: "4rem", height: "5rem" }} src={value}></img></td>
                                if (value == "Accept")
                                    return (<th><label class="switch"><input type="checkbox" onClick={() => this.props.changeStatus(value1.id, "1")} checked /><span class="slider round"></span></label></th>)
                                else if (value == "Not Accept")
                                    return (<th><label class="switch"><input type="checkbox" onClick={() => this.props.changeStatus(value1.id, "0")} /><span class="slider round"></span></label></th>)
                                else
                                    return <td>{value}</td>
                            })
                            }

                            <td>
                                <button style={{ display: this.props.update }} name="add" value={value1.id} onClick={() => this.props.change(value1.id)}><img src="https://taiwebs.com/upload/icons/systemmodeler.png" style={{ width: "2rem" }}></img></button>
                                <button style={{ display: this.props.delete }} type="submit" onClick={() => this.props.delete(value1.id)} name="delete"><img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png" style={{ width: "2rem", height: "2rem" }} alt="" /></button>
                                {this.props.view != null &&
                                    <Link to={"/order_details/:id=" + value1.id}>View details</Link>
                                }
                            </td>
                        </tr>)
                    })}
                </tbody>
                
            </table>
            <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
            <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
            
            </div>
        );
    }
}


export default DataTables;