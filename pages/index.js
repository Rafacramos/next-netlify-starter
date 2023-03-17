import Head from 'next/head';
import '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Light It Up Painting - Cabinet Painting Quote</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Light It Up Painting - Cabinet Painting Quote</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Light It Up Painting - Cabinet Painting Quote</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
    </header>

    <main>
        <section class="intro">
            <h2>Get an Instant Cabinet Painting Estimate</h2>
            <p>At Light It Up Painting, we offer professional cabinet painting services in San Diego, CA. Use our simple online calculator to get an instant estimate for your kitchen cabinet painting project.</p>
        </section>

        <section class="calculator">
            <h2>Price Calculator</h2>
            <form id="calculator-form">
                <div class="form-group">
                    <label for="doors">Number of Doors:</label>
                    <input type="number" id="doors" name="doors" min="0" value="0">
                </div>
                <div class="form-group">
                    <label for="drawers">Number of Drawers:</label>
                    <input type="number" id="drawers" name="drawers" min="0" value="0">
                </div>
                <div class="form-group">
                    <label for="side-panels">Number of Side Panels:</label>
                    <input type="number" id="side-panels" name="side-panels" min="0" value="0">
                </div>
                <button type="submit">Calculate</button>
            </form>
            <div class="result">
                <h3>Estimated Price: <span id="estimated-price">$0</span></h3>
            </div>
        </section>

        <section class="process">
            <h2>Our Cabinet Painting Process</h2>
            <ol>
                <li>Initial consultation to assess your needs and preferences</li>
                <li>Preparation of the workspace, including covering and protecting adjacent surfaces</li>
                <li>Removal of cabinet doors, drawers, and hardware</li>
                <li>Cleaning and sanding of surfaces to ensure proper paint adhesion</li>
                <li>Application of primer to provide a solid base for the paint</li>
                <li>Application of high-quality paint in the color of your choice</li>
                <li>Reinstallation of cabinet doors, drawers, and hardware</li>
                <li>Cleanup and final inspection to ensure your satisfaction</li>
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
