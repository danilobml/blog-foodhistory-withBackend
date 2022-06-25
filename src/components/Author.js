import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Author.css";
const axios = require("axios").default;

function Author() {
  const { authorId } = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/authors/${authorId}/posts`)
      .then((data) => setContent(data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(content);

  if (!content) {
    return null;
  }
  return (
    <>
      <Container className="d-flex flex-column text-start">
        <Row className="mt-5 mb-3">
          <Col>
            <Image style={{ height: "300px", width: "300px" }} src={`http://localhost:3000/authors/${content[0].authorpic}`} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h4>A bit about me:</h4>
            <p>{content[0].bio}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h4>Email:</h4>
            <p>{content[0].email}</p>
          </Col>
        </Row>
        <br />
        <Row className="d-flex">
          <h4>Posts from this Author:</h4>
          <ul>
            {content &&
              content.map((item, index) => (
                <li key={index}>
                  <Link to={`/post/${item.post_id}`} className="custom-link link-posts">
                    {item.headline}
                  </Link>
                </li>
              ))}
          </ul>
        </Row>
      </Container>
    </>
  );
}

export default Author;
