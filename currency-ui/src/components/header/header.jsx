import alivolutLogo from '../../images/alivolut-logo 1.png';
import logoutIcon from '../../images/logout-icon.png';
import './header.css';
import { viravaDefault } from '../../config/authConfig';

const Header = () => {
  const logout = async () => {
    try {
      await viravaDefault.logout();
    } catch (error) {
      console.error(error);
    }
  };

  const logoOnClick = () => {
    window.location.href = '/';
  }

  return (
    <header className="alivolut-header">
      <div className="alivolut-logo-container">
        <button className="alivolut-logo-btn" type='button' onClick={logoOnClick}>
          <img className="alivolut-logo" src={alivolutLogo} alt="Alivolut" />
        </button>
      </div>
      <button className="logout-icon-btn" onClick={logout} type='button'>
        <img className='logout-icon' src={logoutIcon} alt="Log Out" />
      </button>
    </header>
  );
};

export default Header;