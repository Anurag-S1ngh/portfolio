interface ProjectCardProps {
  name: string;
  year: string;
  demo?: string;
  description: string;
}

export const ProjectCard = ({
  name,
  year,
  description,
  demo,
}: ProjectCardProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-serif text-xl">{name}</h3>
        <div className="flex gap-8">
          {demo ? (
            <>
              <a
                target="_blank"
                href={demo}
                className="text-primary/60 font-medium underline underline-offset-2"
              >
                Link
              </a>
            </>
          ) : null}

          <h5 className="text-primary/60 font-medium">{year}</h5>
        </div>
      </div>
      <p className="mt-2 text-left text-primary/60">{description}</p>
    </div>
  );
};
