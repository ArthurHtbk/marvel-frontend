import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterCard = ({ character, userToken }) => {
  const [favorite, setFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isFavorite = async () => {
      try {
        const response = await axios.post(
          "https://marvel-backend-arthur.herokuapp.com/favorites/characters/isFavorite",
          { id: character._id },
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (response.data === true) {
          setFavorite(true);
        }
        setIsLoading(false);
      } catch (error) {}
    };
    isFavorite();
  }, [character._id, userToken]);

  const handleClick = async () => {
    try {
      await axios.post(
        "https://marvel-backend-arthur.herokuapp.com/favorites/characters/add_delete",
        { id: character._id },
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (favorite) {
        setFavorite(false);
      } else {
        setFavorite(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card character-card">
      {userToken && (
        <FontAwesomeIcon
          icon="heart"
          className="heartIcon"
          style={{
            color: isLoading ? "white" : favorite ? "#e62429" : "white",
          }}
          onClick={handleClick}
        />
      )}
      <img
        className="Illustration"
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt={character.name}
      />
      <div className="red">
        <Link to={`/comics/${character._id}`}>
          <h2 className="title">{character.name}</h2>
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
