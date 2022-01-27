import Head from 'next/head';
import Dog from '../components/Dog';
import HomeStyles from '../components/styles/HomeStyles';

export default function Home() {
  return (
    <HomeStyles>
      <div className="container">
        <section className="header">
          <h1>Dogs</h1>
        </section>
        <section className="dogs">
          <Dog></Dog>
          <Dog></Dog>
        </section>
      </div>
    </HomeStyles>
  );
}
