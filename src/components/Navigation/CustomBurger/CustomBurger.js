import React from 'react';
import './CustomBurger.scss';

function CustomBurger(props) {
  const { showElement, setShowElement } = props;
  return (
    <>
      <input
        type="checkbox"
        id="customburger__toggle"
        checked={showElement}
        className="customburger__bars-checkbox"
        readOnly
      />
      <label
        htmlFor="customburger__toggle"
        className="customburger__bars-button customburger__bars-div"
        onClick={() => setShowElement(!showElement)}
      >
        <div className="customburger__bars-icon">&nbsp;</div>
      </label>
    </>
  );
}

export default CustomBurger;
