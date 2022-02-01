import Head from 'next/head';
import Card from '../components/Card';
import dogs from '../lib/dogs';
import home from '../styles/Home.module.css';

// main page
export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="header">
          <h1 className={home.title}>Dogs</h1>
        </section>
        <section className="dogs">
          {Object.keys(dogs).map((dog) => (
            <Card details={dogs[dog]} key={dog}></Card>
          ))}
        </section>
      </div>
    </main>
  );
}
