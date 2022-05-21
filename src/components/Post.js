import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import client from "../contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState();
  useEffect(() => {
    client.getEntry(postId, { include: 10 }).then((data) => setContent(data));
  }, []);

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return <img src={`https://${node.data.target.fields.file.url}`} height={node.data.target.fields.file.details.image.height} width={node.data.target.fields.file.details.image.width} alt={node.data.target.fields.description} />;
      },
    },
  };

  if (!content) {
    return null;
  }

  return (
    <>
      <MyNavbar />
      <Image fluid style={{ width: "100%", height: "450px", objectFit: "cover" }} src={content.fields.heroimage.fields.file.url} />
      <Container className="justify-content-sm-center main-container">
        <Row>
          <Col className="m-3">
            <h1>{content.fields.headline}</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="me-0">
            <Image src={content.fields.author.fields.authorpic.fields.file.url} style={{ width: "100px", height: "100px", marginTop: "1.2rem" }} />
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
            {documentToReactComponents(content.fields.history, renderOptions)}
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
