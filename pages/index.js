import Head from 'next/head';
import Card from '../components/Card';
import HomeStyles from '../components/styles/HomeStyles';
import dogs from '../lib/dogs';

// main page
export default function Home() {
  return (
    <HomeStyles>
      <div className="container">
        <section className="header">
          <h1>Dogs</h1>
        </section>
        <section className="dogs">
          {Object.keys(dogs).map((dog) => (
            <Card details={dogs[dog]} key={dog}></Card>
          ))}
        </section>
      </div>
    </HomeStyles>
  );
}
