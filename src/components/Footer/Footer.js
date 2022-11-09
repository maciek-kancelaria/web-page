import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <ul className={classes.addressContainer}>
          <li>Maciej Sadłek</li>
          <li>535-500-170</li>
          <li>maciej.sadlek@gmail.com</li>
          <li>ul. Słoneczna 626</li>
          <li>43-384 Jaworze</li>
        </ul>
        <ul className={classes.footerMenuContainer}>
          <li to="/about">
            <Link to="/about" className={classes.footerLink}>
              O mnie
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.footerLink}>
              Specjalizacje
            </Link>
          </li>
          <li>
            <Link to="/rodo" className={classes.footerLink}>
              Rodo
            </Link>
          </li>
          <li>
            <Link to="/contact" className={classes.footerLink}>
              Kontakt
            </Link>
          </li>
        </ul>
        <p className={classes.author}>
          made by
          <a className={classes.authorLink} href="http://www.bbdev.pl">
            bbdev
          </a>
          all rights reserved 2022 &copy;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
