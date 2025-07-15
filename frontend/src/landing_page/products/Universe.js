import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-3">The Zerodha Universe</h1>
        <p className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img src="images\zerodhaFundhouse.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="images\sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 ">
          <img src="images\tijori.svg" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images\streakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images\smallcaseLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images\dittoLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          onClick={handleRedirect}
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{
            width: "20%",
            margin: "0  auto",
            backgroundColor: "rgb(56, 126, 209)",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;