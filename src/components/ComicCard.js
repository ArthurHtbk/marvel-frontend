import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";

const ComicCard = ({ comic, userToken }) => {
  const [favorite, setFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isFavorite = async () => {
      try {
        const response = await axios.post(
          "https://marvel-backend-arthur.herokuapp.com/favorites/comics/isFavorite",
          { id: comic._id },
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
  }, [comic._id, userToken]);

  const handleClick = async () => {
    try {
      await axios.post(
        "https://marvel-backend-arthur.herokuapp.com/favorites/comics/add_delete",
        { id: comic._id },
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
    <div className="comic-card card" key={comic._id}>
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
