import PostCard from "./PostCard";
import { Container, Row, Col } from "react-bootstrap";
import NoResults from "./NoResults";

const CardsContainer = ({ content }) => {
  return (
    <Container className="d-flex min-vh-100 max-vw-100 mt-5 justify-content-center">
      {content.length > 0 ? (
        <Row className="g-4">
          {content.map((item, index) => (
            <Col className="m-4" key={index}>
              <PostCard item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <NoResults />
      )}
    </Container>
  );
};

export default CardsContainer;
