import PropTypes from 'prop-types';
import classes from './Card.module.css';

const Card = ({ title, content, isHr }) => {
  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <h1>{title}</h1>
        <div className={classes.content}>{content}</div>
      </div>
      {isHr && <hr className={classes.hr} />}
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isHr: PropTypes.bool,
};

Card.defaultProps = {
  isHr: false,
};

export default Card;
