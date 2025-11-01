import { ProjectCard } from "./project-card";

export const Projects = () => {
  const projects = [
    {
      name: "Traccker",
      year: "2025",
      demo: "https://traccker.anuragcode.me/",
      description:
        "Real-time event attendance tracker with a Go backend and React frontend, featuring live updates via WebSockets",
    },
    {
      name: "BetterLog",
      year: "2025",
      description:
        "Website uptime monitoring tool that tracks uptime and sends email alerts on downtime",
    },
    {
      name: "BrainTwin",
      year: "2025",
      demo: "https://braintwin.anuragcode.me/",
      description:
        "Personal AI-powered knowledge base that organizes notes with media embeds and generates summaries using Gemini API",
    },
    {
      name: "Proofly",
      year: "2025",
      description:
        "Testimonial management platform for collecting, displaying, and embedding video or text reviews on websites",
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
