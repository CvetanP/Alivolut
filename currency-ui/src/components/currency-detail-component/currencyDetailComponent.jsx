import './currencyDetailComponent.css';

const CurrerncyDetailComponent = ({ title, value }) => {
  return (
    <div className="currencyDetailComponent">
      <div className="left-text">{title}</div>
      <div className="right-text">{value}</div>
    </div>
  );
};

export default CurrerncyDetailComponent;
