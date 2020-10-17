import React, { useState, useEffect } from 'react';
import './Preloader.scss';

export default function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {show && (
        <div className="preloader__outerdiv">
          <div className="preloader__h1">Loading...</div>
          <div id="cooking">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>

            <div id="area">
              <div id="sides">
                <div id="pan"></div>
                <div id="handle"></div>
              </div>
              <div id="pancake">
                <div id="pastry"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
