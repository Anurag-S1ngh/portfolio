import { ProjectCard } from "./project-card";

export const Projects = () => {
  const projects = [
    {
      name: "Traccker",
      year: "2025",
      demo: "https://traccker.anuragcode.me/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit",
    },
    {
      name: "BetterLog",
      year: "2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit",
    },
    {
      name: "BrainTwin",
      year: "2025",
      demo: "https://braintwin.anuragcode.me/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit",
    },
    {
      name: "Proofly",
      year: "2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit",
    },
  ];
  return (
    <>
      <div>
        <div className="font-serif sm:text-6xl text-4xl text-center">
          <h1>Projects</h1>
          <h1 className="mt-1">({projects.length})</h1>
        </div>
        <div className="mx-auto sm:w-xl w-xs mt-16 flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              demo={project.demo}
              year={project.year}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
