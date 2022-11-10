import PropTypes from 'prop-types';
import classes from './Paragraph.module.css';

const Paragraph = ({ children }) => {
  return (
    <>
      <p className={classes.paragraph}>{children}</p>
    </>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  quote: PropTypes.string,
};

export default Paragraph;
