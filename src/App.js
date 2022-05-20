import "./App.css";
import MyNavbar from "./components/MyNavbar";
import client from "./contentful/client";
import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [content, setContent] = useState();
  console.log(content);
  useEffect(() => {
    client.getEntries().then((data) => setContent(data));
  }, []);

  let blogPosts = [];
  if (content) {
    blogPosts = content.items.filter((item) => !("name" in item.fields));
  }

  return (
    <div className="App">
      <MyNavbar />
      <Container className="mt-5 me-5 flex-row">
        <Row className="g-4">
          {content &&
            blogPosts.map((item, index) => (
              <Col className="m-4" key={index}>
                <PostCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
