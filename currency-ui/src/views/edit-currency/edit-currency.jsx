import './edit-currency.css';
import { testObject } from '../currency-details/currencyDetail';
import { useParams } from 'react-router-dom';

const EditCurrency = () => {
  const { isoCode } = useParams();

  const index = testObject.isoCode.indexOf(isoCode);

  return (
    <div className="edit-currency-main">
      <div className="edit-currency-box">
        <div className="edit-currency-text">Edit Currency</div>
        <div className="second-container">
          <div className="container">
            <div className="label">Name</div>
            <div className="edit-field">
              <input type="text" defaultValue={testObject.name[index]} />
            </div>
          </div>
          <div className="container">
            <div className="label">ISO Code</div>
            <div className="edit-field">
              <input type="text" defaultValue={testObject.isoCode[index]} />
            </div>
          </div>
          <div className="container">
            <div className="label">Surcharge Percent</div>
            <div className="edit-field">
              <input type="text" defaultValue={testObject.surchargePerc[index]} />
            </div>
          </div>
          <div className="save-btn-container">
            <button className="save-btn" type="button">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCurrency;