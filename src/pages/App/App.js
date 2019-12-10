import React from 'react';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>

    <header className={styles.Header}>
      Header
    </header>

    <main className={styles.Main}>
      <section className={styles.Main__Section}>
        Section 1
      </section>
      <section className={styles.Main__Section}>
        Section 2
      </section>
      <section className={styles.Main__Section}>
        Section 3
      </section>
    </main>

  </div>
);

export default App;
