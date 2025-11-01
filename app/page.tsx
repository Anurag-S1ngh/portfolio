import { Contact } from "@/components/contact";
import { Home } from "@/components/home";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Portfolio() {
  return (
    <>
      <div
        className="fixed h-screen w-full top-0 z-30 pointer-events-none sm:block hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 100%)",
        }}
      />
      <div className="w-full h-full flex gap-48 flex-col py-44 ">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
