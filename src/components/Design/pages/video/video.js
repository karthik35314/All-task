import React from "react";
import videologo from "../../../../Assets/videoimage.webp"
import "./video.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export const Video = () => {
  return (
    <div>
      <div className="container" style={{width:"55%"}}>
        <img className="pt-4 mt-4" src={videologo} style={{ width: "100%" }} />

        <button type="button" class="btn btn-success btn-lg btn-block">
          Block level button
        </button>
      </div>

      <div className="container mt-4" style={{backgroundColor:"#E9E4F3",width:"55%"}}>
        <p className="black">
          Data Policy: When using our RDvault Estimator, our data policy is
          simple - we do not store any of your business data on our servers,
          when using Xero it is a one off download to gather your company
          information and we delete your data right after you are done!
        </p>
      </div>
<div className="container" >        
<h1 className="blue-bold"> Want to see what your R&D claim estimate will look like?</h1>

<Carousel
            nav= {true}
            navText= {["<p>next</p>","<p>prev</p>"]}
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
            emulateTouch={true}
            showStatus={false}
            dotData={true}
          >
              
            <div>
              <img src="https://rdvault.co.uk/wp-content/uploads/2021/01/PDF-mockups-Flat-Mockups6-min.jpg" />
            </div>
            <div>
              <img src="https://rdvault.co.uk/wp-content/uploads/2021/01/PDF-mockups-Flat-Mockups6-min.jpg" />
            </div>
            <div>
              <img src="https://rdvault.co.uk/wp-content/uploads/2021/01/PDF-mockups-Flat-Mockups6-min.jpg" />
            </div>
            <div>
              <img src="https://rdvault.co.uk/wp-content/uploads/2021/01/PDF-mockups-Flat-Mockups6-min.jpg" />
            </div>
            <div>
              <img src="https://rdvault.co.uk/wp-content/uploads/2021/01/PDF-mockups-Flat-Mockups6-min.jpg" />
            </div>
            
          </Carousel>
</div>






    </div>
  );
};
