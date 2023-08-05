import './exchange-transaction-buttons.css';

const ExchangeTransactionButtons = () => {
  const newTransactionOnClick = () => {
    window.location.href = `/new-transaction`;
  };

  const exchangeCurrencyOnClick = () => {
    window.location.href = `/exchange-currency`;
  };

  return (
    <div className="buttons-container">
      <button className="new-transaction-btn" type="button" onClick={newTransactionOnClick}>NEW TRANSACTION</button>
      <button className="exchange-rate-btn" type="button" onClick={exchangeCurrencyOnClick}>EXCHANGE RATE</button>
    </div>
  );
};

export default ExchangeTransactionButtons;