import { useEffect } from "react";
import PostCard from "./PostCard";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NoResults from "./NoResults";
import serverUrl from "../serverUrl";
const axios = require("axios").default;

function Categories({ content, setContent, setTotalPosts, setHome }) {
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

  return (
    <>
      <Container className="d-flex min-vh-100 max-vw-100 mt-5 justify-content-center">
        {content.length > 0 ? (
          <Row className="g-4">
            {content.map((item, index) => (
              <Col className="m-4" key={index}>
                <PostCard item={item} />
              </Col>
            ))}
          </Row>
        ) : (
          <NoResults />
        )}
      </Container>
    </>
  );
}

export default Categories;
