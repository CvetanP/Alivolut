import CurrerncyDetailComponent from '../../components/currency-detail-component/currencyDetailComponent';
import './currencyDetail.css';
import { useParams } from 'react-router-dom';

export const testObject = {
  isoCode: ['USD', 'BGN', 'EUR', 'JPY', 'RUB'],
  symbol: ['$', 'Lv.', '€', '¥', '₽'],
  name: ['USA Dollar', 'Bulgarian Lev', 'Euro', 'Japanese Yen', 'Russian Ruble'],
  surchargePerc: ['2', '3', '1', '5', '4'],
  surchargeAmount: ['20', '16', '34', '46', '8'],
  balance: ['400', '500', '600', '700', '800'],
  exchangeEnabled: [true, false, true, true, false],

};

const CurrencyDetails = () => {
  const { isoCode } = useParams();

  const index = testObject.isoCode.indexOf(isoCode);

  return (
    <div className="currency-detail-container">
      <h1 className="currencyDetailsText">Currency Details</h1>
      <CurrerncyDetailComponent title="Name" value={testObject.name[index]} />
      <CurrerncyDetailComponent title="ISO Code" value={testObject.isoCode[index]} />
      <CurrerncyDetailComponent
        title="Surcharge Percentage"
        value={`${testObject.surchargePerc[index]}%`}
      />
      <CurrerncyDetailComponent
        title="Surcharge Amount"
        value={testObject.surchargeAmount[index]}
      />
      <CurrerncyDetailComponent
        title="Balance"
        value={`${testObject.balance[index]} ${testObject.symbol[index]}`}
      />
      <CurrerncyDetailComponent
        title="Exchange Enabled"
        value={testObject.exchangeEnabled[index] ? 'Yes' : 'No'}
      />
    </div>
  );
};

export default CurrencyDetails;