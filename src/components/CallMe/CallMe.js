import { Link } from 'react-router-dom';
import { ReactComponent as PhoneIcon } from '../../images/phone-white.svg';
import classes from './CallMe.module.css';

const CallMe = () => {
  return (
    <button className={classes.phoneBtn}>
      <Link to="/contact">
        <div className={classes.link}>
          <PhoneIcon className={classes.phoneIcon} />
        </div>
      </Link>
    </button>
  );
};

export default CallMe;
