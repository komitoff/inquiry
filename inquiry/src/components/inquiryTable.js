import React from "react";
import InquiryRow from "./inquiryRow";

export default class InquiryTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            doctors: this.props.value,
        }
    }

    handleOnChange = (index, operations) =>  {
        var docsInfo = this.state.doctors;
        docsInfo[index] = operations;

        this.setState({
            doctors :docsInfo,
        });

        this.props.onChange(docsInfo);
    }

    renderRow(index) {
        return <InquiryRow 
                value={this.state.doctors[index]}
                index={index}
                onChange={this.handleOnChange}
                />;
    }

    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Op1</th>
                    <th scope="col">Op2</th>
                    <th scope="col">Op3</th>
                    <th scope="col">Op4</th>
                    <th scope="col">Op5</th>
                    <th scope="col">Op6</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRow(0)}
                    {this.renderRow(1)}
                    {this.renderRow(2)}
                </tbody>
            </table>
        );
    }
}