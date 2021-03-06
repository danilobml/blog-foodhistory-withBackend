import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Author.css";
import serverUrl from "../serverUrl";
const axios = require("axios").default;

function Author() {
  const { authorId } = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    axios
      .get(`${serverUrl}/api/authors/${authorId}/posts`)
      .then((data) => setContent(data.data))
      .catch((error) => console.log(error));
  }, [authorId]);

  if (!content) {
    return null;
  }
  return (
    <>
      <Container className="d-flex flex-column text-start">
        <Row className="mt-5 mb-3">
          <Col>
            <Image style={{ height: "300px", width: "300px" }} src={`${serverUrl}/authors/${content[0].authorpic}`} />
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
            <p>
              <a href="mailto:contact@tasteofhistory.com">{content[0].email}</a>
            </p>
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
