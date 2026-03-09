import React from "react";
import ai from "../ai.png";
export const Header = () => {
  const fullHeader = (
    <header className={`sticky top-0 z-50`}>
      <div className="flex sm:flex-row flex-col container m-auto max-w-none bg-slate-800 md:px-20 md:py-4">
        <div className="sm:block hidden mt-auto mb-auto ml-8 mr-8 basis-52">
          <a href={"https://linkedin.com/in/ailetrungkiem"} target="_blank" rel="noreferrer" >
            <img className="h-44 rounded-full border-8" src={ai} alt="aile" />
          </a>
        </div>
        <div className="sm:auto sm:m-auto sm:ml-4 mt-4 ml-4 mb-0 font-mono text-slate-300">
          <h1 className="font-bold text-2xl">Ai Le</h1>
          <h1 className="font-bold text-xl">Senior FullStack Developer</h1>
          <p className="sm:block hidden">Full time</p>
        </div>
        <div className="sm:m-auto sm:ml-4 m-4 font-mono text-slate-300">
          <h1>
            <a href="mailto:l.trung.k.ai@gmail.com">
              <span className="text-xl">✉️</span> l.trung.k.ai@gmail.com
            </a>
          </h1>
          <h1>
            <a href="https://linkedin.com/in/ailetrungkiem">
              <span className="text-xl">🖥️</span>{" "}
              www.linkedin.com/in/ailetrungkiem
            </a>
          </h1>
          <h1>
              <span className="text-xl">📍</span>{" "}
              Copenhagen, Denmark
          </h1>
        </div>
      </div>
    </header>
  );

  return <div className="sm:text-base text-sm">{fullHeader}</div>;
};
