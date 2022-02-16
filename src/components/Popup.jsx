import React, { useRef } from "react";
import "./Popup.scss";

function Popup(props) {
  const popup = useRef(null);

  const handleClickClose = () => {
    props.showPopUp(false);
  };

  const handleClick = (e) => {
    if (!popup.current.contains(e.target)) {
      handleClickClose();
    }
  };

  return (
    <div
      className="overlay"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <div className="popup" ref={popup}>
        <button className="btn-close" onClick={handleClickClose}>
          X
        </button>
        <div className="content">
          <div className="img"></div>
          <div className="right">
            <div className="offer">
              <h3>Dolor sit amet consectetur</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                beatae fugit.
              </p>
              <button className="btn-main">Get it</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
