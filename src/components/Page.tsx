import { About } from "./About";
import { Edu } from "./Edu";
import { Exp } from "./Exp";
import { Menu } from "./Menu";
import { Projects } from "./Projects";
export const Page = () => {
  return (
    <div className="flex flex-row container m-auto max-w-none h-52 bg-slate-200 h-auto text-slate-900 md:px-20">
      <div
        className="sm:block hidden mt-8 mb-auto ml-8 mr-8 basis-60"
        style={{ minWidth: "190px" }}
      >
        <Menu></Menu>
      </div>

      <div className="flex flex-col ml-0">
        <About></About>
        <Exp></Exp>
        <Projects></Projects>
        <Edu></Edu>
      </div>
    </div>
  );
};
