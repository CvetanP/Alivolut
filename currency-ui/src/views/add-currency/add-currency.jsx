import './add-currency.css';

const AddCurrency = () => {
  return (
    <div className="add-currency-main">
      <div className="add-currency-box">
        <div className="add-currency-text">Add Currency</div>
        <div className="second-container">
          <div className="container">
            <div className="label">Name</div>
            <div className="field">
              <input type="text" />
            </div>
          </div>
          <div className="container">
            <div className="label">Symbol</div>
            <div className="field">
              <input type="text" />
            </div>
          </div>
          <div className="container">
            <div className="label">ISO Code</div>
            <div className="field">
              <input type="text" />
            </div>
          </div>
          <div className="container">
            <div className="label">Surcharge Percentage</div>
            <div className="field">
              <input type="text" />
            </div>
          </div>
          <div className="add-btn-container">
            <button className="add-btn" type='button'>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCurrency;