import { ProjectCard } from "../components/projectCard.js";
import Container from "react-bootstrap/Container";
const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Container></Container>
      <Container className="d-flex">
        <ProjectCard
          title="Project 1"
          text="This is an example project description. the description should not be very long"
        />
        <ProjectCard
          title="Project 1"
          text="This is an example project description. the description should not be very long"
        />
        <ProjectCard
          title="Project 1"
          text="This is an example project description. the description should not be very long"
        />
      </Container>
    </div>
  );
};

export { Homepage };
