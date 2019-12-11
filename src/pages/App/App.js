import React from 'react';
import BookingResultsContainer from '../../components/BookingResults'
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>

    <header className={styles.Header}>
      <h2>Adslot.</h2>
    </header>

    <main className={styles.Main}>
      <section className={styles.Main__Section}>
        <h2>Bookings</h2>
        <hr />
        <h3>Adslot</h3>
        <BookingResultsContainer />
      </section>
      <section className={styles.Main__Section}>
        <h2>Webfirm</h2>
        <BookingResultsContainer />
      </section>
      <section className={styles.Main__Section}>
        <h2>Automated Guaranteed</h2>
        <BookingResultsContainer />
      </section>
    </main>

  </div>
);

export default App;
