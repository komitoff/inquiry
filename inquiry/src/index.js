import React from "react";
import ReactDOM from "react-dom";
import InquiryTable from "./components/inquiryTable";
import DataInfo from "./data/dataInfo.js";
import "./css/inquiry.css";

class MainLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      docsInfo: DataInfo.getDocInfo(),
    }
  }

  handleOnChange = (docsInfo) => { 
      this.setState({
        docsInfo: docsInfo,
      });
  }

  render() {
    return (
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <InquiryTable 
            value={this.state.docsInfo}
            onChange={this.handleOnChange}/>
        </div>
        <div class="container-fluid py-5">
          {this.state.docsInfo[0].o1}
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainLayout />);
