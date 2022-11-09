import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className={classes.container}>{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
