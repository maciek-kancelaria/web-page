import PropTypes from 'prop-types';
import SpecItem from './SpecItem';
import classes from './SpecGrid.module.css';

const SpecGrid = ({ items }) => {
  return (
    <section className={classes.grid}>
      {items.map((el, index) => (
        <SpecItem {...el} key={index} />
      ))}
    </section>
  );
};

SpecGrid.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SpecGrid;
