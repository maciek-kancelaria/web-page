import classes from './NotFoundContent.module.css';

const NotFoundContent = () => {
  return (
    <div className={classes.notFound}>
      <h3>Coś poszło nie tak!</h3>
      <p>wygląda na to, że szukana przez Ciebie strona nie istnieje...</p>
    </div>
  );
};

export default NotFoundContent;
