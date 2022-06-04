import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import client from "../contentful/client";

function Author() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState();

  useEffect(() => {
    client.getEntry(authorId, { include: 10 }).then((data) => setAuthor(data));
  }, []);

  if (!author) {
    return null;
  }
  console.log(author);
  return (
    <>
      <Container className="d-flex flex-column text-start">
        <Row className="mt-5 mb-3">
          <Col>
            <Image style={{ height: "300px", width: "300px" }} src={author.fields.authorpic.fields.file.url} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h4>A bit about me:</h4>
            <p>{author.fields.bio}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h4>Email:</h4>
            <p>{author.fields.email}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Author;
