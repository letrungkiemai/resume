import { About } from "./About";
import { Edu } from "./Edu";
import { Exp } from "./Exp";
import { Menu } from "./Menu";
export const Page = () => {
  return (
    <div className="flex flex-row container m-auto max-w-none h-52 bg-slate-200 h-auto text-slate-900">
      <div
        className="sm:block hidden mt-8 mb-auto ml-8 mr-8 basis-60"
        style={{ minWidth: "153px" }}
      >
        <Menu></Menu>
      </div>

      <div className="flex flex-col ml-0 sm:font-mono font-sans">
        <About></About>
        <Exp></Exp>
        <Edu></Edu>
      </div>
    </div>
  );
};
