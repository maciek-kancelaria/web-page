import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { ReactComponent as HamburgerIcon } from '../../images/icons/bars-solid.svg';
import { ReactComponent as CloseIcon } from '../../images/icons/xmark-solid.svg';

import classes from './Navigation.module.css';
import styles from './MobileNavigation.module.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenuHandler = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const menuStyle = isMobileMenuOpen
    ? `${classes.menuContainer} ${classes.mobileToggle}`
    : classes.menuContainer;

  return (
    <nav className={classes.navbar}>
      <div className={classes.navContainer}>
        <NavLink to="/" className={classes.logo}>
          <img
            src={logo}
            alt="kancelaria radcy prawnego"
            className={classes.logoImg}
          />
        </NavLink>
        <ul className={menuStyle}>
          <li>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
            >
              O mnie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
            >
              Specjalizacje
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rodo"
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
            >
              Rodo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
        <div
          className={styles.mobileMenuWrap}
          onClick={toggleMobileMenuHandler}
        >
          {isMobileMenuOpen && <CloseIcon className={styles.icon} />}
          {!isMobileMenuOpen && <HamburgerIcon className={styles.icon} />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
