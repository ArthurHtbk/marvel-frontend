import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import FavChar from "../components/FavChar";
import FavComics from "../components/FavComics";
import Loading from "../components/Loading";

const Favorites = ({ userToken }) => {
  const [charactersData, setCharactersData] = useState();
  const [comicsData, setComicsData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersResponse = await axios.get(
          "https://marvel-backend-arthur.herokuapp.com/favorites/characters",
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        setCharactersData(charactersResponse.data);
        const comicsResponse = await axios.get(
          "https://marvel-backend-arthur.herokuapp.com/favorites/comics",
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        setComicsData(comicsResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [userToken]);

  return !userToken ? (
    <Redirect to="/" />
  ) : isLoading ? (
    <Loading />
  ) : (
    <div className="container">
      <h1>Favorites</h1>
      <FavChar data={charactersData} userToken={userToken} />
      <FavComics data={comicsData} userToken={userToken} />
    </div>
  );
};

export default Favorites;
