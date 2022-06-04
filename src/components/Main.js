import PostCard from "./PostCard";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Paginate from "./Paginate";

function App({ content, onNextPage, onPrevPage, onPageNumbers, page }) {
  const { category } = useParams();
  return (
    <div className="App">
      <Container className="d-flex m-5 justify-content-center">
        <Row className="g-4">
          {category
            ? content &&
              content.items
                .filter((item) => item.fields.type === category)
                .map((item, index) => (
                  <Col className="m-4" key={index}>
                    <PostCard item={item} />
                  </Col>
                ))
            : content &&
              content.items.map((item, index) => (
                <Col className="m-4" key={index}>
                  <PostCard item={item} />
                </Col>
              ))}
        </Row>
      </Container>
      {!category && (
        <Row>
          <Col className="d-flex justify-content-center">
            <Paginate pagItems={content.items} total={content.total} onNextPage={onNextPage} onPrevPage={onPrevPage} onPageNumbers={onPageNumbers} page={page} />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default App;
