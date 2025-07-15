import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ color: "white", fontSize: "1.2em" }}>
          Track tickets
        </a>
      </div>
      <div className="row p-3" id="supportWrapper">
        <div className="col-6 p-4">
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <br />
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."></input>
          <br />
          <p>
            <a href="" style={{ lineHeight: "2.0", color: "white" }}>
              Track account opening{" "}
            </a>
            <a href="" style={{ lineHeight: "2.0", color: "white" }}>
              Track segment activation
            </a>
            <a href="" style={{ lineHeight: "2.0", color: "white" }}>
              Intraday margins{" "}
            </a>
            <a href="" style={{ lineHeight: "2.0", color: "white" }}>
              Kite user manual
            </a>
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-3">
          <h3>Featured</h3>
          <ol>
            <li>
              <a
                href=""
                style={{ lineHeight: "2.0", color: "white", fontSize: "1.1em" }}
              >
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
              <br />
            </li>
            <li>
              <a
                href=""
                style={{ lineHeight: "2.0", color: "white", fontSize: "1.1em" }}
              >
                Revision in expiry day of Index and Stock derivatives contractsl
              </a>
            </li>
          </ol>
        </div>
        <div className="col-1"></div>
      </div>
    </section>
  );
}

export default Hero;
