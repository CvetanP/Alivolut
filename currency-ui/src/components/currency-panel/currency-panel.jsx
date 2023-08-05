import './currency-panel.css';
import { useNavigate } from 'react-router-dom';
import EditCurrencyIcon from '../../images/edit-currency-icon.png';
import InfoCurrencyIcon from '../../images/info-currency-icon.png';
import { testObject } from '../../views/currency-details/currencyDetail';

const CurrencyPanel = () => {
  const navigate = useNavigate();

  const infoOnClick = (isoCode) => {
    navigate(`/currency-info/${isoCode}`);
  };

  const editOnClick = (isoCode) => {
    navigate(`/edit-currency/${isoCode}`);
  };

  const renderCurrencyComponents = () => {
    return testObject.isoCode.map((isoCode, index) => {
      return (
        <div key={isoCode} className="currency-info">
          <div className="currency-name">
            {testObject.name[index]} {isoCode}
          </div>
          <div className="edit-info-currency-container">
            <button className="edit-currency-btn" type="button" onClick={() => editOnClick(isoCode)}>
              <img className="edit-currency-icon" src={EditCurrencyIcon} alt="Edit" />
            </button>
            <button className="info-currency-btn" type="button" onClick={() => infoOnClick(isoCode)}>
              <img className="info-currency-icon" src={InfoCurrencyIcon} alt="Info" />
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {renderCurrencyComponents()}
    </div>
  );
};

export default CurrencyPanel;