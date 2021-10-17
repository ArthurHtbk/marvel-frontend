import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ComicCard from "../components/ComicCard";
import Pagination from "../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = ({ userToken }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skipped, setSkipped] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-arthur.herokuapp.com/comics?skip=${skipped}&title=${title}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [skipped, title]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <section className="comics-hero">
        <h1>COMICS</h1>
        <p>
          All your favorite stories and adventures listed below. More than
          40,000 comics!
        </p>
        <form>
          <input
            placeholder="Search"
            type="text"
            onChange={(event) => {
              setSkipped(0);
              setTitle(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && event.preventDefault();
            }}
          />
          <FontAwesomeIcon icon="search" className="searchIcon" />
        </form>
      </section>
      <div className="container comics-container">
        {data.results.map((comic) => {
          return (
            <ComicCard userToken={userToken} comic={comic} key={comic._id} />
          );
        })}
      </div>
      <Pagination skipped={skipped} setSkipped={setSkipped} data={data} />
    </div>
  );
};

export default Comics;
