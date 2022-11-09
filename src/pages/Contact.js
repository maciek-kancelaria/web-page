import { useLayoutEffect } from 'react';
import ContactMe from '../components/ContactMe/ContactMe';

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <ContactMe />;
};

export default Contact;
