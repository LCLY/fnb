import React, { Dispatch, SetStateAction } from 'react';
import './CustomBurger.scss';

type CustomBurgerProps = {
    showElement: boolean;
    setShowElement: Dispatch<SetStateAction<boolean>>;
};

function CustomBurger({ showElement, setShowElement }: CustomBurgerProps) {
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
