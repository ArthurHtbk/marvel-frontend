const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>
          AVENGERS... <b>ASSEMBLE!</b>
        </h1>
        <p>
          Explore your favorite comics and characters from the <b>Marvel</b>{" "}
          universe
        </p>
      </section>
      <div className="upcoming">
        <h2>UPCOMING FILMS & SERIES</h2>
      </div>
      <section className="shang-chi">
        <div className="container">
          <button className="trailer-button">
            <a
              href="https://www.youtube.com/watch?v=8YjFbMbfXaQ&ab_channel=MarvelEntertainment"
              target="_blank"
              rel="noopener noreferrer"
            >
              WATCH TRAILER
            </a>
          </button>
        </div>
      </section>
      <section className="eternals">
        <div className="container">
          <button className="trailer-button">
            <a
              href="https://www.youtube.com/watch?v=0WVDKZJkGlY&ab_channel=MarvelEntertainment"
              target="_blank"
              rel="noopener noreferrer"
            >
              WATCH TRAILER
            </a>
          </button>
        </div>
      </section>
      <section className="what-if">
        <div className="container">
          <button className="trailer-button">
            <a
              href="https://www.youtube.com/watch?v=x9D0uUKJ5KI&ab_channel=MarvelEntertainment"
              target="_blank"
              rel="noopener noreferrer"
            >
              WATCH TRAILER
            </a>
          </button>
        </div>
      </section>
      <section className="hawkeye">
        <div className="container">
          <button className="trailer-button">
            <a
              href="https://www.youtube.com/watch?v=i004l5TeToU&ab_channel=ModeMarvelous"
              target="_blank"
              rel="noopener noreferrer"
            >
              WATCH TRAILER
            </a>
          </button>
        </div>
      </section>
      <section className="spiderman">
        <div className="container">
          <button className="trailer-button">
            <a
              href="https://www.youtube.com/watch?v=N6wMMMt5DY4&ab_channel=ScreenCulture"
              target="_blank"
              rel="noopener noreferrer"
            >
              WATCH TRAILER
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
