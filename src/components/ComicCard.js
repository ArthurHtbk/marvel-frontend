const ComicCard = ({ comic }) => {
  return (
    <div className="comic-card card" key={comic._id}>
      <img
        className="Illustration"
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        alt={comic.title}
      />
      <div className="red">
        <h2 className="title">{comic.title}</h2>
      </div>
    </div>
  );
};

export default ComicCard;
