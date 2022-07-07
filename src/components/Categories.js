import { useEffect } from "react";
import { useParams } from "react-router-dom";
import serverUrl from "../serverUrl";
import CardsContainer from "./CardsContainer";
const axios = require("axios").default;

function Categories({ content, setContent, setHome }) {
  const { category } = useParams();
  setHome(false);
  useEffect(() => {
    axios
      .get(`${serverUrl}/api/posts/categories/${category}`)
      .then(({ data }) => {
        setContent(data);
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [category, setContent]);

  return <CardsContainer content={content} />;
}

export default Categories;
