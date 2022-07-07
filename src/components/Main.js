import { Row, Col } from "react-bootstrap";
import Paginate from "./Paginate";
import CardsContainer from "./CardsContainer";

function App({ content, onNextPage, onPrevPage, onPageNumbers, page, totalPosts }) {
  return (
    <>
      <CardsContainer content={content} />
      {
        <Row>
          <Col className="d-flex justify-content-center">
            <Paginate pagItems={content} total={totalPosts} onNextPage={onNextPage} onPrevPage={onPrevPage} onPageNumbers={onPageNumbers} page={page} />
          </Col>
        </Row>
      }
    </>
  );
}

export default App;
