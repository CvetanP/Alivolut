import ErrorPicture from '../../images/error.png';
import './error-404.css';

const Error404 = () => {
  return (
    <div className="img-container">
      <img className="error-img" src={ErrorPicture} alt="404 ERROR" />
    </div>
  );
};

export default Error404;