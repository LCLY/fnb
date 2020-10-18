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
          <div className="preloader__div">
            <div className="preloader"></div>
            <div className="preloader__text">Loading...</div>
          </div>
        </div>
      )}
    </>
  );
}
