import { useLayoutEffect } from 'react';
import CallMe from '../components/CallMe/CallMe';
import SpecGrid from '../components/Specialization/SpecGrid';
import Paragraph from '../components/UI/Paragraph';
import Title from '../components/UI/Title';
import specializationContent from '../data/data';

const text = 'wiedza - doświadczenie - zaangażowanie';

const Specializations = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Title text="radca prawny Maciej Sadłek" className="mb0" />
      <Title text="KANCELARIA RADCY PRAWNEGO" className="mt-small" />
      <Paragraph>{text}</Paragraph>
      <SpecGrid items={specializationContent} />
      <CallMe />
    </>
  );
};

export default Specializations;
