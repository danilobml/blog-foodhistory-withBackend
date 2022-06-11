import { Container, Row, Col } from "react-bootstrap";
const NoResults = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Sorry, no matches found.</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default NoResults;
