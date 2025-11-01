import { Contact } from "@/components/contact";
import { Home } from "@/components/home";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Portfolio() {
  return (
    <>
      <div
        className="fixed h-screen w-full top-0 z-30 pointer-events-none sm:block hidden dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_90%,rgba(0,0,0,1)_100%)] 
bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%,rgba(255,255,255,0)_90%,rgba(255,255,255,1)_100%)]
        "
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
