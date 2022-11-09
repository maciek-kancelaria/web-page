import { useLayoutEffect } from 'react';
import CallMe from '../components/CallMe/CallMe';
import SpecGrid from '../components/Specialization/SpecGrid';
import Paragraph from '../components/UI/Paragraph';
import Title from '../components/UI/Title';
import specializationContent from '../data/data';

const text =
  '"Każdy ma prawo do sprawiedliwego i publicznego rozpatrzenia jego sprawy w rozsądnym terminie przez niezawisły i bezstronny sąd ustanowiony ustawą przy rozstrzyganiu o jego prawach i obowiązkach o charakterze cywilnym albo o zasadności każdego oskarżenia w wytoczonej przeciwko niemu sprawie karnej".';

const textQuote =
  'Art. 6 ust. 1 Konwencja o ochronie praw człowieka i podstawowych wolności';

const anotherText = `"Rzeczpospolita Polska jest demokratycznym państwem prawnym, urzeczywistniającym zasady sprawiedliwości społecznej."`;

const anotherTextQuote = 'Art. 2 Konstytucji Rzeczypospolitej Polskiej';

const Specializations = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Title text="Maciej Sadłek" className="mb0" />
      <Title text="Kancelaria Radcy Prawnego" className="mt-small" />
      <Paragraph quote={textQuote}>{text}</Paragraph>
      <Paragraph quote={anotherTextQuote}>{anotherText}</Paragraph>
      <SpecGrid items={specializationContent} />
      <CallMe />
    </>
  );
};

export default Specializations;
