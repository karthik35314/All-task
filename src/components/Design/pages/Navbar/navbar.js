import React from "react";
import "./navbar.css";
import logo from "../../../../Assets/RDVault-Logo-White-1536x573.webp";
import banner from "../../../../Assets/banner.webp";

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <img src={logo} style={{ width: "100%" }} />
          </div>
          <div className="col-sm-3 ">
            <h1>R&D Tax Claim - Estimator</h1>
          </div>

          <div className="col-sm-2">
            <button class="btn btn-success">
              NEED HELP?
            </button>
          </div>

          <div className="col-sm-2 ">
            <img
              class="img-fluid"
              src="https://rdvault.co.uk/wp-content/uploads/2020/11/telephone_icon.png"
              style={{ marginLeft: "18px", width: "15px" }}
            />
            <span className="white">0161 504 0800</span>
          </div>

          <div className="col-sm-3">
            <a href="mailto:hello@rdvault.co.uk">
              <div style={{width:"20px"}} className="row">
              <img
                class="img-fluid"
                src="https://rdvault.co.uk/wp-content/uploads/2020/11/mail_icon.png"
                style={{ width: "100%" }}
              />
              </div>
              <span className="white">hello@rdvault.co.uk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
