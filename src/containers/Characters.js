import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skipped, setSkipped] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-arthur.herokuapp.com/characters?skip=${skipped}&name=${name}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [skipped, name]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <section className="characters-hero">
        <h1>CHARACTERS</h1>
        <p>
          All your favorite heroes, villains and teams listed below. More than
          1,000 characters!
        </p>
        <form>
          <input
            placeholder="Search"
            type="text"
            onChange={(event) => {
              setSkipped(0);
              setName(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && event.preventDefault();
            }}
          />
          <FontAwesomeIcon icon="search" className="searchIcon" />
        </form>
      </section>
      <div className="container characters-container">
        {data.results.map((character, index) => {
          return (
            <Link
              to={`comics/${character._id}`}
              key={character._id}
              className="character-link"
            >
              <CharacterCard character={character} />
            </Link>
          );
        })}
      </div>
      <Pagination skipped={skipped} setSkipped={setSkipped} data={data} />
    </div>
  );
};

export default Characters;
