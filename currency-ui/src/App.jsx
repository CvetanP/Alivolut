import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NewTransaction from './views/new-transaction/new-transaction';
import ExchangeCurrency from './views/exchangeCurrency/exchangeCurrency';
import CurrencyList from './views/currency-list/currency-list';
import CurrencyDetails from './views/currency-details/currencyDetail';
import EditCurrency from './views/edit-currency/edit-currency';
import AddCurrency from './views/add-currency/add-currency';
import Header from './components/header/header';
import Error404 from './views/error-404/error-404';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/all-currencies' element={<CurrencyList />} />
          <Route path='/currency-info/:isoCode' element={<CurrencyDetails />} />
          <Route path='/new-transaction' element={<NewTransaction />} />
          <Route path='/edit-currency/:isoCode' element={<EditCurrency />} />
          <Route path='/add-currency' element={<AddCurrency />} />
          <Route path='/exchange-currency' element={<ExchangeCurrency />} />
          <Route index element={<Navigate replace to="/all-currencies" />} />
          <Route path="/all-currencies" element={<CurrencyList />} />
          <Route path="/error-404" element={<Error404 />} />
          <Route path='/*' element={<Navigate to="/error-404" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;