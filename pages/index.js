import Head from 'next/head';
import { useState } from 'react';
import usePriceCalculator from '../usePriceCalculator';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { estimatedPrice, calculatePrice } = usePriceCalculator();
  const [doors, setDoors] = useState(0);
  const [drawers, setDrawers] = useState(0);
  const [sidePanels, setSidePanels] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePrice(doors, drawers, sidePanels);
  };

  return (
    <>
      <Head>
        <title>Light It Up Painting - Cabinet Painting Quote</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <h1>Light It Up Painting</h1>
        <nav>
          <a href="https://lightituppainting.com">Get a Quote</a>
          <a href="https://lightituppainting.com/cabinets">Our Process</a>
        </nav>
      </header>
      <main>
        <section className={styles.intro}>
          <h2>Instant Cabinet Painting Estimate</h2>
          <p>
            Get an instant estimate for cabinet painting using our simple online
            calculator. Just enter the number of doors, drawers, and side panels
            to get your quote.
          </p>
        </section>
        <section id="quote" className={styles.calculator}>
          <h2>Price Calculator</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="doors">Doors:</label>
              <input
                type="number"
                id="doors"
                name="doors"
                value={doors}
                onChange={(e) => setDoors(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="drawers">Drawers:</label>
              <input
                type="number"
                id="drawers"
                name="drawers"
                value={drawers}
                onChange={(e) => setDrawers(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="side-panels">Side Panels:</label>
              <input
                type="number"
                id="side-panels"
                name="side-panels"
                value={sidePanels}
                onChange={(e) => setSidePanels(e.target.value)}
              />
            </div>
            <button type="submit">Calculate</button>
          </form>
          <div className={styles.result}>
            Estimated Price: <strong>${estimatedPrice}</strong>
          </div>
        </section>
        <section id="process" className={styles.process}>
          <h2>Our Cabinet Painting Process</h2>
          <p>
            At Light It Up Painting, we follow a detailed process to ensure the
            best results for your cabinet painting project. Here are the steps
            we take:
          </p>
          <ol>
            <li>Remove doors, drawers, and hardware.</li>
            <li>Clean and sand surfaces.</li>
            <li>Apply primer.</li>
            <li>Apply the first coat of paint.</li>
            <li>Sand surfaces again.</li>
            <li>Apply the final coat of paint.</li>
            <li>Reinstall doors, drawers, and hardware.</li>
          </ol>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Light It Up Painting. All rights reserved. | San Diego, CA</p>
    </footer>
</body>
</html>
/}
    </>
  );
}
