import React from "react";
import ReactDOM from "react-dom";
import InquiryTable from "./components/inquiryTable";
import "./css/inquiry.css";

class MainLayout extends React.Component {

  getDocInfo() {
    return [
      {
        name: "Ivan",
        o1: 0,
        o2: 0,
        o3: 0,
        o4: 0,
        o5: 0,
        o6: 0,
        o7: 0
      },
      {
        name: "Pesho",
        o1: 0,
        o2: 0,
        o3: 0,
        o4: 0,
        o5: 0,
        o6: 0,
        o7: 0
      },
      {
        name: "Gosho",
        o1: 0,
        o2: 0,
        o3: 0,
        o4: 0,
        o5: 0,
        o6: 0,
        o7: 0
      }
    ]
  }

  render() {
    return (
      <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <InquiryTable value={this.getDocInfo()}/>
      </div>
    </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainLayout />);
