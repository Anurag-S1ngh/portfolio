import { Fragment } from "react/jsx-runtime";

export const Contact = () => {
  const contacts = [
    {
      name: "Email",
      link: "mailto:anuragsingh2313@gmail.com",
    },
    {
      name: "Twitter",
      link: "https://x.com/AnuragSingh1829",
    },
    {
      name: "Github",
      link: "https://github.com/Anurag-S1ngh",
    },
  ];
  return (
    <>
      <div>
        <h1 className="font-serif text-6xl text-center">
          <span>Contact</span>
          <br />
          <span>(3)</span>
        </h1>
        <h1 className="font-serif text-center text-4xl mt-12 flex gap-4 items-center justify-center text-primary/60">
          {contacts.map((contact) => (
            <Fragment key={contact.name}>
              <a
                target="_blank"
                href={contact.link}
                className="hover:text-primary"
              >
                {contact.name}
              </a>
              <span className="text-primary/60">
                {contacts.indexOf(contact) === contacts.length - 1 ? "" : "|"}
              </span>
            </Fragment>
          ))}
        </h1>
      </div>
    </>
  );
};
