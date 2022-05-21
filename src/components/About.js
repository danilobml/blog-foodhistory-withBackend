import MyNavbar from "../components/MyNavbar";
import { useEffect, useState } from "react";
import client from "../contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container, Row, Col, Image } from "react-bootstrap";
import AuthorCard from "./AuthorCard";

const About = () => {
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();
  // const [userInput, setUserInput] = useState();
  // const [searchText, setSearchText] = useState();

  useEffect(() => {
    client.getEntries({ content_type: "about" }).then((data) => setContent(data));
    client.getEntries({ content_type: "author" }).then((info) => setAuthor(info));
  }, []);

  //   const handleUserInput = (e) => {
  //     setUserInput(e.target.value);
  //   };

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     navigate("/");
  //     setSearchText(userInput);
  //     e.target.reset();
  //   };

  return (
    <>
      <MyNavbar /*onInput={onInput} onSubmit={onSubmit}*/ />
      <Container className="justify-content-sm-center main-container">
        <Row>
          <Col className="m-3 ms-0">{content && <h1>{content.items[0].fields.headline}</h1>}</Col>
        </Row>
        <Row>
          <Col sm={12} className="mb-5">
            {content && documentToReactComponents(content.items[0].fields.body)}
          </Col>
        </Row>
        <Row className="g-4">
          <h2>Authors:</h2>
          {author &&
            author.items.map((author, index) => (
              <Col key={index} className="m-3">
                <AuthorCard author={author} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
export default About;
