import React from "react";

export default class InquiryCell extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p 
                className="value_counter"
                onClick={this.props.onClick}
                onContextMenu={this.props.onClick}>
                        {this.props.value}
            </p> 
        )
    };
}