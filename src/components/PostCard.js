import { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div id="post-card">
      <div id="typeTag" className={item.fields.type}>
        {item.fields.type}
      </div>
      <Link to={`/post/${item.sys.id}`} className="card-links">
        <Card className="card" style={{ width: "21.5rem", height: "fit-content" }} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
          <Card.Img style={{ height: "300px" }} variant="top" src={item.fields.heroimage.fields.file.url} />
          <Card.Body>
            <Card.Title>{item.fields.headline}</Card.Title>
            <Collapse in={open}>
              <Card.Text>{item.fields.slug}</Card.Text>
            </Collapse>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default PostCard;
