import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return <div className="container" >
    <div className="row mt-3">
      <div className="col-6 p-5">
        <img src={imageURL} className="p-5"/>
      </div>
      <div className="col-1"></div>
      <div className="col-5 p-5 mt-5">
        <h1 style={{color: "rgb(66,66,66)"}}>{productName}</h1>
        <p className="mt-3" style={{lineHeight:"1.8", color: "rgb(66,66,66)"}}>{productDescription}</p>
        <div>
          <a href={tryDemo} target="_blank" style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={learnMore} style={{marginLeft:"100px", textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="mt-3">
          <a href={googlePlay}><img src="images\googlePlayBadge.svg"/></a>
          <a href={appStore}><img src="images\appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
        </div>
      </div>
    </div>
  </div>;
}

export default LeftSection;
