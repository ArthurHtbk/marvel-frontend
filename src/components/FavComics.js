import ComicCard from "./ComicCard";

const FavComics = ({ data, userToken }) => {
  return (
    <div>
      <h2 className="favorites-title">Favorite Comics</h2>
      {!data.length ? (
        <p>You don't have any favorite comics yet...</p>
      ) : (
        <div className="characters-container">
          {data.map((comic) => {
            return (
              <ComicCard key={comic._id} comic={comic} userToken={userToken} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavComics;
