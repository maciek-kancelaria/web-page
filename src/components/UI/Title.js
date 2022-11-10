import PropTypes from 'prop-types';
import classes from './Title.module.css';

const Title = ({ text, className }) => {
  let titleExtraStyle;
  if (className === 'small') {
    titleExtraStyle = { fontSize: '24px' };
  }
  if (className === 'mb0') {
    titleExtraStyle = { marginBottom: '8px', fontSize: '24px' };
  }
  if (className === 'mt-small') {
    titleExtraStyle = { marginTop: '20px' };
  }

  return (
    <h1 className={classes.text} style={titleExtraStyle}>
      {text}
    </h1>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
