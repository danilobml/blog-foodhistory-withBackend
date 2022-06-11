import { useState } from "react";
import { Card, Collapse, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container id="post-card" className="d-flex justify-content-center" style={{ width: "21.5rem", height: "fit-content" }}>
      <div id="typeTag" className={item.fields.type}>
        {item.fields.type == "Lost_foods" ? "Lost Foods" : item.fields.type}
      </div>
      <Link to={`/post/${item.sys.id}`} style={{ width: "21.5rem", height: "fit-content" }} className="card-links d-flex">
        <Card className="card justify-self-center" style={{ width: "21.5rem", height: "fit-content" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <Card.Img style={{ height: "300px" }} variant="top" src={item.fields.heroimage.fields.file.url} />
          <Card.Body>
            <Card.Title>{item.fields.headline}</Card.Title>
            <Collapse in={open}>
              <Card.Text>{item.fields.slug}</Card.Text>
            </Collapse>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  );
};

export default PostCard;
