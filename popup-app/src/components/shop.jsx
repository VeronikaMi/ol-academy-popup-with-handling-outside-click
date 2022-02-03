import React, { useState } from "react";
import "./shop.scss";
import Popup from "./popup";

function Shop() {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = (e) => {
    setShowPopup(e);
  };

  return (
    <div className="main">
      <header>
        <h1>SomeLogo</h1>
      </header>
      <div className="container">
        <div className="image">
          <div className="left">
            <div className="info">
              <h2>Get your something just for 1.00$</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                ipsam. Quo, harum. Doloribus sed recusandae deleniti amet omnis
                aperiam debitis. Eum animi obcaecati dolorum eveniet, nemo optio
                repellendus reiciendis nisi.
              </p>
              <button
                className="btn-main"
                onClick={() => {
                  setShowPopup(true);
                }}
              >
                Get Something
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <Popup showPopUp={(e) => closePopup(e)} />}
    </div>
  );
}

export default Shop;
