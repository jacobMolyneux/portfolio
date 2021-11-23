import { ProjectCard } from "../components/projectCard.js";
const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <ProjectCard
        title="Project 1"
        text="This is an example project description. the description should not be very long"
      />
    </div>
  );
};

export { Homepage };
