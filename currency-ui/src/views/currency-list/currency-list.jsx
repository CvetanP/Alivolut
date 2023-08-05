import './currency-list.css';
import CurrencyPanel from '../../components/currency-panel/currency-panel';
import CurrencyListBar from '../../components/currency-list-bar/currency-list-bar';
import ExchangeTransactionButtons from '../../components/exchange-transaction-buttons/exchange-transaction-buttons';
import { testObject } from '../currency-details/currencyDetail';

const CurrencyList = () => {
  return (
    <div>
      <ExchangeTransactionButtons />
      <div className="currency-list-main">
        <CurrencyListBar />
        <div className="currency-list">
          <CurrencyPanel name={testObject.isoCode} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyList;