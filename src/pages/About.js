import { useLayoutEffect } from 'react';
import { aboutMe } from '../data/data';
import Card from '../components/UI/Card';
import Title from '../components/UI/Title';
import CallMe from '../components/CallMe/CallMe';

const upperTitle =
  'Cieszę się, że tu jesteś i chcesz się czegoś o mnie dowiedzieć!';

const bottomTitle =
  'Jeżeli szukasz pomocy, zadzwoń lub napisz – postaram się pomóc.';

const style = {
  fontSize: '22px',
  color: '#362b74',
  marginTop: '-30px',
  marginBottom: '50px',
};

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Title text={upperTitle} className="small" />
      <h1 style={style}>Dziękuję!</h1>
      {aboutMe.map((el, index) => (
        <Card
          key={index}
          title={el.title}
          content={el.content}
          isHr={aboutMe.length - 1 === index ? false : true}
        />
      ))}
      <Title text={bottomTitle} className="small" />
      <CallMe />
    </>
  );
};

export default About;
