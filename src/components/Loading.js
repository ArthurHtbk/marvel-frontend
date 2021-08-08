import marvelWallpaper from "../images/marvel-comics-marvel-logo-comics-wallpaper.jpg";

const Loading = () => {
  return (
    <section className="loading">
      <img
        src={marvelWallpaper}
        alt="Marvel wallpaper"
        className="marvel-wallpaper"
      />
      <div className="loading-bar"></div>
    </section>
  );
};

export default Loading;
