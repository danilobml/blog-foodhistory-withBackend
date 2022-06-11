import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import client from "../contentful/client";
import "./Author.css";

function Author() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    client.getEntry(authorId, { include: 10 }).then((data) => setAuthor(data));
    client.getEntries({ content_type: "blogPost", "fields.author.sys.id": authorId }).then((data) => {
      setPosts(data);
    });
  }, []);

  if (!author) {
    return null;
  }
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
        <br />
        <Row className="d-flex">
          <h4>Posts from this Author:</h4>
          <ul>
            {posts &&
              posts.items.map((item, index) => (
                <li>
                  <Link to={`/post/${item.sys.id}`} key={index} className="custom-link link-posts">
                    {item.fields.headline}
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
