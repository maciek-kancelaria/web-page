import photo from '../../images/maciek.jpg';
import phoneIcon from '../../images/phone-solid.svg';
import envelopeIcon from '../../images/envelope-solid.svg';
import logo from '../../images/icons/logo.png';

import classes from './ContactMe.module.css';
const ContactMe = () => {
  return (
    <section className={classes.contactContainer}>
      <div className={classes.titleImage}>
        <img
          src={photo}
          alt="photo of founder"
          className={classes.titleImage}
        />
      </div>
      <h1 className={classes.title}>Skontakuj się ze mną:</h1>
      <div className={classes.infoContainer}>
        <div className={classes.innerInfoContainer}>
          <img src={phoneIcon} alt="phone icon" className={classes.icon} />
          <span>535-500-170</span>
        </div>
        <div className={classes.innerInfoContainer}>
          <img
            src={envelopeIcon}
            alt="envelope icon"
            className={classes.icon}
          />
          <span>maciej.sadlek@gmail.com</span>
        </div>
      </div>
      <hr />
      <div className={classes.addressContainer}>
        <h2>adres Kancelarii</h2>
        <span>ul. Słoneczna 626</span>
        <span>43-384 Jaworze</span>
        <span>NIP: 9372550173</span>
      </div>
      <div className={classes.logoWrap}>
        <img src={logo} className={classes.logo} />
      </div>
    </section>
  );
};

export default ContactMe;
