import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className="fs-5 mt-2 text-muted mb-5">List of all charges and taxes</h3>
        <div className="col-4 mt-5 p-3">
            <img src="images\pricing-eq.svg" style={{width:"70%"}}/>
            <h2 >Free equity delivery</h2>
            <p className="text-muted mt-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 mt-5 p-3">
            <img src="images\other-trades.svg" style={{width:"70%"}}/>
            <h2 >Intraday and F&O trades</h2>
            <p className="text-muted mt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 mt-5 p-3">
            <img src="images\pricing-eq.svg" style={{width:"70%"}}/>
            <h2 >Free direct MF</h2>
            <p className="text-muted mt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
