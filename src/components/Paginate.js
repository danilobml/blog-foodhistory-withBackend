import { Pagination } from "react-bootstrap";

function Paginate({ total, onNextPage, onPrevPage, onPageNumbers, page }) {
  const items = [];

  for (let number = 1; number <= Math.ceil(total / 6); number++) {
    items.push(
      <Pagination.Item key={number} active={number === page} onClick={() => onPageNumbers(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Pagination>
        <Pagination.Prev onClick={onPrevPage} />
        {items}
        <Pagination.Next onClick={onNextPage} />
      </Pagination>
    </>
  );
}

export default Paginate;
