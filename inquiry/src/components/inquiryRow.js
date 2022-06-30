import React from "react";
import InquiryCell from "./inquiryCell.js";

export default class InquiryRow extends React.Component {

    constructor(props) {
        super(props);
        console.log(`props - ${this.props}`);
        this.state = {
            cells: Array(7).fill(0),
        }
    }

    handleClick(val, event) {
        let cells = this.state.cells.slice();
        if (event.nativeEvent.which === 1) {
            cells[val] += 1;
        } 
        else {
            cells[val] -= 1;
        }
        
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
            <td> {this.renderCell(0)} </td>
            <td> {this.renderCell(1)} </td>
            <td> {this.renderCell(2)} </td>
            <td> {this.renderCell(3)} </td>
            <td> {this.renderCell(4)} </td>
            <td> {this.renderCell(5)} </td>
        </tr>
        )
    };
}