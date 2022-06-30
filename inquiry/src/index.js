import React from "react";
import ReactDOM from "react-dom";
import InquiryTable from "./components/inquiryTable";
import DataInfo from "./data/dataInfo.js";
import "./css/inquiry.css";

class MainLayout extends React.Component {

  render() {
    return (
      <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <InquiryTable value={DataInfo.getDocInfo()}/>
      </div>
    </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainLayout />);
