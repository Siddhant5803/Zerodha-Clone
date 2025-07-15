import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-2">
      <div className="row p-5">
        <div className="col-5 p-5 mt-5">
          <h1 style={{ color: "rgb(66,66,66)" }}>{productName}</h1>
          <p style={{ lineHeight: "1.8", color: "rgb(66,66,66)" }}>
            {productDescription}
          </p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
