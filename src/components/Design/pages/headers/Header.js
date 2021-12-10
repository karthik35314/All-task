import React from "react";
import "./header.css";
import { Navbar } from "../Navbar/navbar";
import logo from "../../../../Assets/Xero-Logo.webp";


export const Header = () => {
  return (
    <div className="headerbg">
      <Navbar />
      <div style={{ backgroundColor: "#66498C33" }}>
        <div className="mt-4" style={{ display: "inline-block" }}>
          <div className="block-one ">
            <h1>1.choose</h1>
            <h1> 2.your company</h1>
            <h1>3.your estimated R&d claim</h1>
          </div>
        </div>
      </div>

      <div className="block-two text-center">
        <h1>RDvault R&D Tax Claim Estimator</h1>
        <p>The UK’s most accurate R&D claim calculator</p>
      </div>

      <div className="block-three row">
        <div className="col-sm-3"></div>

        <div className="col-sm-6">
          <div className="row text-left">
            <div className="col-sm-4">
              <img src={logo} className="logo" />
            </div>
            <div className="col-sm-8">
              <p>
                Connect to XERO and get a personalised R&D Tax Credits claim
                estimate in 2 minutes. Not using XERO? You can still use our
                advanced estimator to input your figures!
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-3"></div>
      </div>

      <div>
        <p> See our 107 reviews on trsutpilot </p>
      </div>



    </div>
  );
};
