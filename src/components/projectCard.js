import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ImageHolder from "../images/imageHolder.png";
import { useState } from "react";
const ProjectCard = (props) => {
  let [flipped, setFlipped] = useState(false);
  if (flipped === false) {
    return (
      <Card style={{ width: "18rem", height: "22rem" }}>
        <Card.Img src={ImageHolder} className="p-1"></Card.Img>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button
          style={{ width: "10rem" }}
          className="m-3"
          onClick={() => setFlipped((flipped = true))}
        >
          See More
        </Button>
      </Card>
    );
  } else if (flipped === true) {
    return (
      <Card style={{ width: "18rem", height: "22rem" }}>
        <Card.Title>{props.title}</Card.Title>

        <Button style={{ width: "10rem" }} variant="primary" className="m-3">
          Github
        </Button>
        <Button syle={{ width: "10rem" }} variant="secondary" className="m-3">
          Live Link
        </Button>
        <Button
          style={{ width: "10rem" }}
          className="m-3"
          onClick={() => setFlipped((flipped = false))}
          variant="danger"
        >
          Back
        </Button>
      </Card>
    );
  }
};

export { ProjectCard };
