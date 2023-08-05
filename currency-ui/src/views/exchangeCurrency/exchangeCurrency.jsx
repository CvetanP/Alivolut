import Layer1 from '../../images/Layer_1.png';
import { useState } from 'react';
import { testObject } from '../currency-details/currencyDetail';
import './exchangeCurrency.css';

const ExchangeCurrency = () => {
  const [selectedCurrency1, setSelectedCurrency1] = useState(testObject.isoCode[0]);
  const [selectedCurrency2, setSelectedCurrency2] = useState(testObject.isoCode[1]);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSwapCurrencies = () => {
    setSelectedCurrency1(selectedCurrency2);
    setSelectedCurrency2(selectedCurrency1);
  };

  const createCurrencyDropdown = () => {
    return testObject.isoCode.map((isoCode) => (
      <option key={isoCode} value={isoCode}>
        {isoCode}
      </option>
    ));
  };

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    setAmount(inputAmount);

    if (!/^\d+(\.\d{0,2})?$/.test(inputAmount) && inputAmount !== '') {
      setError('Invalid amount. Please enter a valid number.');
    } else {
      setError('');
    }
  };

  return (
    <div className="whiteBox">
      <h2 className="text">Exchange Currency</h2>
      <div className="container">
        <div className="border">
          <input className="inputStyle" type="text" value={amount} onChange={handleAmountChange} />
          <div className="currency-menu-container">
            <select
              id="dropdown1"
              name="option1"
              value={selectedCurrency1}
              onChange={(e) => setSelectedCurrency1(e.target.value)}
            >
              {createCurrencyDropdown()}
            </select>
          </div>
        </div>
        <div className="swap-currencies-img">
          <button className="swap-currencies-btn" type="button" onClick={handleSwapCurrencies}>
            <img src={Layer1} alt="Layer_1" />
          </button>
        </div>
        <div className="border">
          <input className="inputStyle" type="text" readOnly />
          <div className="currency-menu-container">
            <select
              id="dropdown2"
              name="option2"
              value={selectedCurrency2}
              onChange={(e) => setSelectedCurrency2(e.target.value)}
            >
              {createCurrencyDropdown()}
            </select>
          </div>
        </div>
      </div>
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      <button className="exchangeButton" type="button">
        Exchange
      </button>
    </div>
  );
};

export default ExchangeCurrency;