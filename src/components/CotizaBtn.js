import React, {useCallback} from 'react';
import './CotizaBtn.css';
import {useHistory} from 'react-router-dom';

const CotizaBtn = () => {

    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/cotizar'), [history]);

    return (
        <div className="btn-back">
            <button  className="btn-track" onClick={handleOnClick}>
            <div class="--icon">
                <div class="circle-inner"></div>
                <div class="circle-outer"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" id="box">
                <path d="M0 6L5 0H19L24 6V11H0V6Z" fill="#FDDDB3"/>
                <path d="M0.835938 5L5 0H11.5L10 5H0.835938ZM12.5 0L14 5H23.1667L19 0H12.5ZM0 22.5V6H10V10.5L12 9.5L14 10.5V6H24V22.5C24 23.3284 23.3284 24 22.5 24H1.5C0.671573 24 0 23.3284 0 22.5Z" fill="#B39056"/>
                <rect x="6" y="13" width="12" height="3" rx="0.25" fill="white"/>
            </svg>
            <svg width="10" height="14" viewBox="0 0 10 14" id="pin">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 14C6.5 14 10 8.5 10 5C10 1.5 7.76142 0 5 0C2.23858 0 0 1.5 0 5C0 8.5 3.5 14 5 14ZM4.99998 7.5C6.38069 7.5 7.49998 6.38071 7.49998 5C7.49998 3.61929 6.38069 2.5 4.99998 2.5C3.61927 2.5 2.49998 3.61929 2.49998 5C2.49998 6.38071 3.61927 7.5 4.99998 7.5Z" fill="#DE6D56"/>
                </svg>
            </div>
            <div class="--text">¡Ya Quiero mi página web! 🛒</div>
            </button>
        </div>
    )
}

export default CotizaBtn
