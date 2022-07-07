import { useState } from "react";
import { Card, Collapse, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostCard.css";
import serverUrl from "../serverUrl";

const PostCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container id="post-card" className="d-flex justify-content-center" style={{ width: "21.5rem", height: "fit-content" }}>
      <div id="typeTag" className={item.type}>
        {item.type === "Lost_foods" ? "Lost Foods" : item.type}
      </div>
      <Link to={`/post/${item.post_id}`} style={{ width: "21.5rem", height: "fit-content" }} className="card-links d-flex">
        <Card className="card justify-self-center" style={{ width: "21.5rem", height: "fit-content" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <Card.Img style={{ height: "300px" }} variant="top" src={`${serverUrl}/posts/${item.heroimage}`} />
          <Card.Body>
            <Card.Title>{item.headline}</Card.Title>
            <Collapse in={open}>
              <Card.Text>{item.slug}</Card.Text>
            </Collapse>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  );
};

export default PostCard;
