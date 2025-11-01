export const Home = () => {
  return (
    <h1 className="mx-auto text-center flex flex-col gap-2">
      <span className="sm:text-xl text-primary/60 font-medium -mb-3">
        Hola 👋
      </span>
      <span className="font-serif sm:text-6xl text-4xl ">
        It's Anurag Singh
      </span>
      <span className="sm:text-xl font-medium text-primary/60">
        Full Stack Developer
      </span>
      <span className="font-serif sm:text-6xl text-4xl group">
        <a
          className="group-hover:text-primary/60 hover:text-primary"
          target="_blank"
          href="https://x.com/AnuragSingh1829"
        >
          Twitter
        </a>
        <span className="group-hover:text-primary/60"> | </span>
        <a
          className="group-hover:text-primary/60 hover:text-primary"
          target="_blank"
          href="https://github.com/Anurag-S1ngh"
        >
          Github
        </a>
      </span>
    </h1>
  );
};
