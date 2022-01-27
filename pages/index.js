import Head from 'next/head';
import Dog from '../components/Dog';
import HomeStyles from '../components/styles/HomeStyles';
import dogs from '../lib/dogs';

export default function Home() {
  return (
    <HomeStyles>
      <div className="container">
        <section className="header">
          <h1>Dogs</h1>
        </section>
        <section className="dogs">
          {Object.keys(dogs).map((dog) => (
            <Dog details={dogs[dog]} key={dog}></Dog>
          ))}
        </section>
      </div>
    </HomeStyles>
  );
}
