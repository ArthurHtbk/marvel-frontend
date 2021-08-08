import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import ComicCard from "../components/ComicCard";
import Loading from "../components/Loading";

const CharacterId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-arthur.herokuapp.com/comics/${characterId}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <h1 className="character-name">{data.name}</h1>
      <div className="container characterId-container">
        <CharacterCard character={data} />
        {data.description && <p className="description">{data.description}</p>}
      </div>
      <h2>STARRED IN:</h2>
      <div className="container comicsId-container">
        {data.comics.map((comic, index) => {
          return <ComicCard comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default CharacterId;
