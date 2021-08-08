const CharacterCard = ({ character }) => {
  return (
    <div className="card character-card">
      <img
        className="Illustration"
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt={character.name}
      />
      <div className="red">
        <h2 className="title">{character.name}</h2>
      </div>
    </div>
  );
};

export default CharacterCard;
