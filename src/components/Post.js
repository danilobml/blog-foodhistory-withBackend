import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import client from "../contentful/client";

const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState();
  useEffect(() => {
    client.getEntry(postId).then((data) => setContent(data));
  }, []);
  console.log(content);

  if (!content) {
    return null;
  }
  return (
    <>
      <MyNavbar />
      <Image fluid style={{ width: "100%", height: "450px" }} src={content.fields.heroimage.fields.file.url} />
      <Container clasName="justify-content-sm-center main-container">
        <Row>
          <Col className="m-3">
            <h1>{content.fields.headline}</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="me-0">
            <Image roundedCircle src={content.fields.author.fields.authorpic.fields.file.url} style={{ width: "100px", height: "100px", marginTop: "1.2rem" }} />
          </Col>
          <Col sm={3} className="ms-0">
            <hr />
            <h4>{content.fields.author.fields.name}</h4>
            <h6>{content.fields.author.fields.email}</h6>
            <p>Posted: {content.fields.publishdate}</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mb-4">
            <h5>{content.fields.slug}</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mb-5">
            <h4 style={{ color: "red" }}>Here we will put the "History" elements (text and pics). But it seems quite complex to select them directly from the data, though we definitely can. Ben said there is a simpler way, so maybe we could ask him tomorrow.</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Tags:</h5>
            <ul>
              {content.metadata.tags.map((item, index) => (
                <li key={index}>
                  <strong>{item.sys.id}</strong>
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
