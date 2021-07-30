import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal_Data extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {
                    this.props.typeIn == "textarea" &&
                    <div>
                        <label for=""> {this.props.title} </label><br />
                        <textarea name={this.props.name} id={this.props.id} onChange={this.props.change} cols="30" rows="10"
                            required></textarea><br />
                    </div>
                }
                {this.props.typeIn == "select" &&
                    <div>
                        <label for="">{this.props.title}</label><br />
                        <select name={this.props.name} id="industry" onChange={this.props.change}>
                            {
                                this.props.data.map(element => {
                                   console.log(element);
                                    var key=Object.keys(element);
                                    var val=Object.values(element);
                                    return (<option value={val[0]}> { val[1]} </option>)
                                })
                            }
                        </select><br />
                    </div>
                }
                {
                    this.props.typeIn == "file" &&
                    <div>
                        <label for=""> Hình ảnh </label><br />
                        <input type="file" name="image" id={this.props.id} onChange={this.props.change}/><br />
                    </div>
                }
                {
                    this.props.typeIn == "image" &&
                    <div>
                        <img id="img" style={{width: "6rem", height: "6rem", display:"none"}} /><br/>
                    </div>
                }
                {
                    this.props.typeIn != "textarea" && this.props.typeIn != "select"&&this.props.typeIn != "file" &&this.props.typeIn != "image" &&
                    <div>
                        <label for="">{this.props.title}</label><br />
                        <input type={this.props.typeIn} id={this.props.id} readOnly={this.props.read} onChange={this.props.change} name={this.props.name}
                            required />
                    </div>
                }

            </div>
        );
    }
}


export default Modal_Data;