import './currency-list-bar.css';
import { useState } from 'react';

const CurrencyListBar = () => {
  const [exchangeableButton, setExchangeableButton] = useState(false);

  const handleClick = () => {
    setExchangeableButton(!exchangeableButton);
  };

  const addOnClick = () => {
    window.location.href = `/add-currency`;
  };

  return (
    <div className="currency-list-bar">
      <div className="currency-name-info">Currency</div>
      <button
        className={`exchangeable-currency-btn ${exchangeableButton ? 'exchangeable' : ''}`}
        type="button"
        onClick={handleClick}
      >
        EXCHANGEABLE
      </button>
      <button className="add-currency-btn" type="button" onClick={addOnClick}>
        ADD
      </button>
    </div>
  );
};

export default CurrencyListBar