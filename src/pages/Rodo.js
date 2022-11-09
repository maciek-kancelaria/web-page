import { useLayoutEffect } from 'react';
import CallMe from '../components/CallMe/CallMe';
import RodoElement from '../components/RodoElement/RodoElement';

const Rodo = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RodoElement />
      <CallMe />
    </>
  );
};

export default Rodo;
