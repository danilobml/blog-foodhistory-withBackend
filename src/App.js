import "./App.css";
import MyNavbar from "./components/MyNavbar";
import client from "./contentful/client";
import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [content, setContent] = useState();
  const { category } = useParams();
  const [userInput, setUserInput] = useState();
  const [searchText, setSearchText] = useState();

  const queryString = searchText ? searchText : "";

  let navigate = useNavigate();

  useEffect(() => {
    client.getEntries({ content_type: "blogPost", query: queryString }).then((data) => setContent(data));
  }, [queryString]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/");
    setSearchText(userInput);
    e.target.reset();
  };

  if (!category) {
    return (
      <div className="App">
        <MyNavbar onInput={handleUserInput} onSubmit={handleSearch} />
        <Container className="mt-5 me-5 flex-row">
          <Row className="g-4">
            {content &&
              content.items.map((item, index) => (
                <Col className="m-4" key={index}>
                  <PostCard item={item} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="App">
        <MyNavbar onInput={handleUserInput} onSubmit={handleSearch} />
        <Container className="mt-5 me-5 flex-row">
          <Row className="g-4">
            {content &&
              content.items
                .filter((item) => item.fields.type === category)
                .map((item, index) => (
                  <Col className="m-4" key={index}>
                    <PostCard item={item} />
                  </Col>
                ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
