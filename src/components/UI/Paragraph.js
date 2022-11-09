import PropTypes from 'prop-types';
import classes from './Paragraph.module.css';

const Paragraph = ({ children, quote }) => {
  return (
    <>
      <p className={classes.paragraph}>{children}</p>
      <p className={classes.quote}>{quote}</p>
    </>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  quote: PropTypes.string,
};

export default Paragraph;
