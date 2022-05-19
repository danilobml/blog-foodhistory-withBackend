import { Card, Button } from "react-bootstrap";

const PostCard = ({ content }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={content.items[0].fields.heroimage.fields.file.url} />
      <Card.Body>
        <Card.Title>{content.items[0].fields.headline}</Card.Title>
        <Card.Text>{content.items[0].fields.slug}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
