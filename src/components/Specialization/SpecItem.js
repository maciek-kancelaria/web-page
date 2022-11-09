import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconShow } from '../../images/icons/down.svg';
import { ReactComponent as IconHide } from '../../images/icons/up.svg';
import classes from './SpecItem.module.css';

const SpecItem = ({ title, content, icon }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const contentVisibilityHandler = () => {
    setIsContentVisible((prev) => !prev);
  };

  const contentControl = isContentVisible ? (
    <IconHide className={classes.iconControl} />
  ) : (
    <IconShow className={classes.iconControl} />
  );

  const contentStyle = isContentVisible ? { display: 'block' } : null;

  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        {icon}
        <h1 className={classes.title}>{title}</h1>
      </div>
      <div className={classes.content} style={contentStyle}>
        {content}
      </div>
      <button className={classes.button} onClick={contentVisibilityHandler}>
        {contentControl}
      </button>
    </section>
  );
};

SpecItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SpecItem;
