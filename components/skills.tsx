import { Fragment } from "react/jsx-runtime";

export const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Go",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Shadcn UI",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "WebSocket",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Mongoose",
    "Git",
    "GitHub",
    "Docker",
    "Neovim",
    "Postman",
  ];

  return (
    <>
      <div>
        <h1 className="font-serif text-6xl text-center">
          <span>Skills</span>
          <br />
          <span>(21)</span>
        </h1>
        <div className="w-2xl mx-auto mt-16 flex justify-center flex-wrap gap-x-4 font-medium text-3xl text-primary/60 gap-y-0 font-serif">
          {skills.map((skill, index) => {
            return (
              <Fragment key={index}>
                <h6>{skill}</h6>
                <h6> {index === skills.length - 1 ? "" : "|"}</h6>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
