import CharacterCard from "./CharacterCard";

const FavChar = ({ data, userToken }) => {
  return (
    <div>
      <h2 className="favorites-title">Favorite Characters</h2>
      {!data.length ? (
        <p>You don't have any favorite characters yet...</p>
      ) : (
        <div className="characters-container">
          {data.map((character) => {
            return (
              <CharacterCard
                key={character._id}
                character={character}
                userToken={userToken}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavChar;
