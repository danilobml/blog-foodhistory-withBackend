import PostCard from "./PostCard";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function App({ content }) {
  const { category } = useParams();

  if (!category) {
    return (
      <div className="App">
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
