import { useEffect } from "react";
import { useParams } from "react-router-dom";
import serverUrl from "../serverUrl";
import CardsContainer from "./CardsContainer";
const axios = require("axios").default;

function SearchResults({ content, setContent, setHome }) {
  const { searchParams } = useParams();
  setHome(false);
  useEffect(() => {
    axios
      .get(`${serverUrl}/api/posts/results/${searchParams}`)
      .then(({ data }) => {
        setContent(data);
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [searchParams, setContent]);

  return <CardsContainer content={content} />;
}

export default SearchResults;
