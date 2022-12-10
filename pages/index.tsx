import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>susannewilfriedreiterladenauf - 15. Juli 2023</title>
        <meta
          name="description"
          content="Hochzeitsfeier auf der Hinteregger Ranch!"
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      </Head>
      
      <div className="mx-auto">
        <h1 className="ml5">
          <span className="text-wrapper">
            <span className="line line1"></span>
            <span className="letters letters-left">susanne</span>
            <span className="letters ampersand">&amp;</span>
            <span className="letters letters-right">wilfried</span>
            <span className="line line2"></span>
          </span>
        </h1>
      </div>

      <main className={styles.main}>
        <section>
          <h2>⏱️ Der Zeitliche Ablauf</h2>

          <table>
            <tr>
              <td>≈ 12:00</td>
              <td>Festliche Tafel der Familie 🍴</td>
            </tr>
            <tr>
              <td>≈ 15:00</td>
              <td>Empfang der Party Gäste 🍾</td>
            </tr>
            <tr>
              <td>≈ 18:00</td>
              <td>Abendessen 🍔</td>
            </tr>
            <tr>
              <td>≈ 20:00</td>
              <td>Full Supa Band! 🎸</td>
            </tr>
            <tr>
              <td>≈ 00:00</td>
              <td>Jausn 🥖</td>
            </tr>
          </table>
        </section>

        <section>
          <a class="btn primary" href="https://docs.google.com/forms/d/e/1FAIpQLScOs2yZgKenGxNTTdWmvP0UMUvo39lPW4NQzhxHIzDdApeVLA/viewform?usp=sf_link">Zur Anmeldung ✏️</a>
        </section>

        <section>
          <h2>🧭 Wie kommen wir zur Hintergger-Ranch?</h2>

          <a class="btn" target="blank" href="https://www.google.com/maps/dir/Takern-St.Margarethen+Bahnhof,+8321/47.0282614,15.7714242/@47.0358,15.7439679,4501m/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x476e538b170e9001:0x9c491967a8029e0f!2m2!1d15.757852!2d47.045659!1m0!3e2">🚂 vom Bahnhof Takern</a>
          <a class="btn" target="blank" href="https://www.google.com/maps/dir/Gleisdorf,+8200/47.0282614,15.7714242/@47.0664296,15.6975194,9738m/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x476e51b7d865316b:0x4a4cd8df13e8ef3a!2m2!1d15.7085092!2d47.1068416!1m0!3e0">🚗 von Gleisdorf</a>
          <a class="btn" target="blank" href="https://www.google.com/maps/dir/Gleisdorf,+8200/47.0282614,15.7714242/@47.0664296,15.6975194,9738m/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x476e51b7d865316b:0x4a4cd8df13e8ef3a!2m2!1d15.7085092!2d47.1068416!1m0!3e0">🚗 von Markt Hartmannsdorf</a>

          <p>oder <a class="inline-flex underline underline-offset-2" href="https://www.citytaxi.at/">CityTaxi Gleisdorf</a>!</p>
        </section>

        <section>
          <h2>🏕️ Übernachtungsmöglichkeiten</h2>

          <ul class="flex flex-col gap-2">
            <li>
              <a href="https://www.gasthof-gruber.at/">Gasthof Gruber</a>
            </li>
            <li>
              <a href="https://www.gaestehausjeindl.com/">Gästehaus Jeindl</a>
            </li>
            <li>
              <a href="http://bauernhofzoller.com/de/willkommen/">Bauernhof Zolller</a>
            </li>
            <li><a href="https://ambio.co.at/">Ambio, Hotel (Gleisdorf)</a></li>
            <li class="font-bold">oder campieren auf der Hintergger-Ranch!</li>
          </ul>
        </section>
        <div>wir freuen uns schon!!</div>
      </main>
    

    <script>
      anime.timeline({loop: true})
      .add({
        targets: '.ml5 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 1500
      }).add({
        targets: '.ml5 .line',
        duration: 1000,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
      }).add({
        targets: '.ml5 .ampersand',
        opacity: [0,1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 1600,
        offset: '-=600'
      }).add({
        targets: '.ml5 .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 1600,
        offset: '-=300'
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 1600,
        offset: '-=600'
      }).add({
        targets: '.ml5',
        opacity: 0,
        duration: 10000,
        easing: "easeOutExpo",
        delay: 10000
      });
    </script>    
    

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>    
  
      
      
      
      
      </div>      
  );
};

export default Home;
