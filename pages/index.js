import Head from 'next/head';
import Card from '../components/Card';
import dogs from '../lib/dogs';
import home from '../styles/Home.module.css';

// main page
export default function Home() {
  return (
    <main className={home.home}>
      <div className={home.container}>
        <section className={home.header}>
          <h1 className={home.header_title}>Dogs</h1>
        </section>
        <section className={home.dogs}>
          {Object.keys(dogs).map((dog) => (
            <Card details={dogs[dog]} key={dog} value={'red'}></Card>
          ))}
        </section>
      </div>
    </main>
  );
}
