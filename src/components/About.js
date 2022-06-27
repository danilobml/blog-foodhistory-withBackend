import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthorCard from "./AuthorCard";
const axios = require("axios").default;

const About = () => {
  const [author, setAuthor] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/authors")
      .then((data) => setAuthor(data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(author);

  return (
    <Container className="d-flex flex-column text-start">
      <Row>
        <Col className="m-3 ms-0">
          <h1>About A Taste of History</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mb-5">
          <div className="mb-5 col-sm-12">
            <p>Food and History: a very tasteful combination!</p>
            <p>One afternoon, Kyle Phillips and Danilo Lima got together and decided to unite their greatest passions and start a blog about food, history, traveling, and adventure. The history of food would be bland without the stories describing the experiences of real people who were ready to embark on this journey of historical taste, tasting funny and unorthodox recipes, with crazy ingredients and discovering foods lost in time.</p>
            <p>Join us in our adventures!</p>
            <p>And check out also our contributing authors below.</p>
          </div>
        </Col>
      </Row>
      <Row className="g-4">
        <h2>Authors:</h2>
        {author &&
          author.map((author, index) => (
            <Col key={index} className="m-3">
              <AuthorCard author={author} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default About;
