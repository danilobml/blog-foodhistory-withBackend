import PostCard from "./PostCard";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Paginate from "./Paginate";
import NoResults from "./NoResults";

function App({ content, onNextPage, onPrevPage, onPageNumbers, page }) {
  const { category } = useParams();
  return (
    <>
      <Container className="d-flex min-vh-100 max-vw-100 mt-5 justify-content-center">
        {content.length > 0 ? (
          <Row className="g-4">
            {category
              ? content
                  .filter((item) => item.type === category)
                  .map((item, index) => (
                    <Col className="m-4" key={index}>
                      <PostCard item={item} />
                    </Col>
                  ))
              : content.map((item, index) => (
                  <Col className="m-4" key={index}>
                    <PostCard item={item} />
                  </Col>
                ))}
          </Row>
        ) : (
          <NoResults />
        )}
      </Container>
      {/* {!category && (
        <Row>
          <Col className="d-flex justify-content-center">
            <Paginate pagItems={content.items} total={content.total} onNextPage={onNextPage} onPrevPage={onPrevPage} onPageNumbers={onPageNumbers} page={page} />
          </Col>
        </Row>
      )} */}
    </>
  );
}

export default App;
