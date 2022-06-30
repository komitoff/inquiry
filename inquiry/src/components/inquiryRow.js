import React from "react";
import InquiryCell from "./inquiryCell.js";

export default class InquiryRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: this.props.value,
        }
    }

    handleClick(val, event) {
        let cells = Object.assign({}, this.state.cells);
        let increment = event.nativeEvent.which === 1 ? 1 : -1;
        cells[val] += increment;
        
        this.setState({
            cells: cells,
        });
    }

    renderCell(val) {
        return <InquiryCell 
                value={this.state.cells[val]}
                onClick={(event) => this.handleClick(val, event)}/>;
    }
    render() {
        return (
        <tr>
            <td> {this.props.value.name}</td>
            <td> {this.renderCell(Object.keys(this.state.cells)[1])} </td>
            <td> {this.renderCell(Object.keys(this.state.cells)[2])} </td>
            <td> {this.renderCell(Object.keys(this.state.cells)[3])} </td>
            <td> {this.renderCell(Object.keys(this.state.cells)[4])} </td>
            <td> {this.renderCell(Object.keys(this.state.cells)[5])} </td>
            <td> {this.renderCell(Object.keys(this.state.cells)[6])} </td>
        </tr>
        )
    };
}