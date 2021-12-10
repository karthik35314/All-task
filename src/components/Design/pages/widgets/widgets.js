import React from "react";
import "./widgets.css";
import logo1 from "../../../../Assets/logo1.webp";
import logo2 from "../../../../Assets/logo2.webp";
import logo3 from "../../../../Assets/logo3.webp";


export const Widgets = () => {
  return (
    <div>
      <h1 className="blue-bold"> How does it work?</h1>
      <div className="container"></div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="customcard">
              <img src={logo1} style={{ width: "50%" }} />

              <h3 className="blue-bold">1. Tell us a bit about your company</h3>

              <p className="grey">
                Find your company on Companies House or give us your basic
                information manually
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="customcard">
              <img src={logo2} style={{ width: "50%" }} />

              <h3 className="blue-bold">2.Import and edit your expenses</h3>

              <p className="grey">
                Find your company on Companies House or give us your basic
                information manually
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="customcard">
              <img src={logo3} style={{ width: "50%" }} />

              <h3 className="blue-bold">3.Get your personalised R&D report</h3>

              <p className="grey">
                Find your company on Companies House or give us your basic
                information manually
              </p>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-success green">
          Unsure about anyting? Get in Touch
        </button>
      </div>
      <div className="banners mt-4">
        <div className="row">
          <div className="col-4 white p-4">
            <h1>100%</h1>
            <h1>Successful & Fast Claims</h1>
          </div>
          <div className="col-4 white p-4">
            <h1>100%</h1>
            <h1>Successful & Fast Claims</h1>
          </div>
          <div className="col-4 white p-4">
            <h1>100%</h1>
            <h1>Successful & Fast Claims</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
