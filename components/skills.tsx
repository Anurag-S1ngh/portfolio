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
        <h1 className="font-serif sm:text-6xl text-4xl text-center uppercase">
          <span>Skills</span>
          <br />
          <span>(21)</span>
        </h1>
        <div className="sm:w-2xl w-xs sm:px-0 px-2 mx-auto mt-16 flex justify-center flex-wrap gap-x-4 font-medium sm:text-3xl text-xl text-primary/60 gap-y-0 font-serif">
          {skills.map((skill, index) => {
            return (
              <Fragment key={index}>
                <h6 className="hover:text-primary cursor-default">{skill}</h6>
                <h6> {index === skills.length - 1 ? "" : "|"}</h6>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
