import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Post.css";
import { Markup } from "react-render-markup";
import serverUrl from "../serverUrl";
const axios = require("axios").default;

const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState();
  const [history, setHistory] = useState();
  useEffect(() => {
    axios
      .get(`${serverUrl}/api/posts/post/${postId}`)
      .then((data) => {
        setContent(data.data[0]);
        setHistory(data.data[0].history);
      })
      .catch((error) => console.log(error));
  }, [postId]);

  console.log(history);

  if (!content) {
    return null;
  }

  return (
    <>
      <Image fluid style={{ width: "100%", height: "450px", objectFit: "cover" }} src={`${serverUrl}/posts/${content.heroimage}`} />
      <Container className="d-flex flex-column text-start">
        <Row>
          <Col className="m-3">
            <h1>{content.headline}</h1>
          </Col>
        </Row>
        <Row>
          <Link className="custom-link author-link" to={`/author/${content.author_id}`}>
            <Col sm={2} className="me-0">
              <Image src={`${serverUrl}/authors/${content.authorpic}`} style={{ width: "100px", height: "100px", marginTop: "1.2rem" }} />
            </Col>
            <Col sm={3} className="ms-0">
              <hr />
              <h4>{content.name}</h4>
              <h6>{content.email}</h6>
              <p>Posted: {content.publishdate}</p>
              <hr />
            </Col>
          </Link>
        </Row>
        <Row>
          <Col sm={12} className="mb-4">
            <h5>{content.slug}</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mb-5">
            <Markup markup={history} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Tags:</h5>
            <ul>
              {content.tags.map((item, index) => (
                <li key={index}>
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Post;
