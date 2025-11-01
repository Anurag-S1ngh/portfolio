export const Home = () => {
  return (
    <h1 className="mx-auto text-center flex flex-col gap-2">
      <span className="sm:text-xl text-primary/55 -mb-2">Hola 👋</span>
      <span className="font-serif sm:text-6xl text-4xl uppercase">
        It's Anurag Singh
      </span>
      <span className="sm:text-xl text-primary/55">Full Stack Developer</span>
      <span className="font-serif sm:text-6xl text-4xl group uppercase">
        <a
          className="group-hover:text-primary/10 hover:text-primary"
          target="_blank"
          href="https://x.com/AnuragSingh1829"
        >
          Twitter
        </a>
        <span className="group-hover:text-primary/10"> | </span>
        <a
          className="group-hover:text-primary/10 hover:text-primary"
          target="_blank"
          href="https://github.com/Anurag-S1ngh"
        >
          Github
        </a>
      </span>
    </h1>
  );
};
