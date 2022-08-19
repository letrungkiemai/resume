import React from "react";

export const Menu = () => {
  return (
    <div className="fixed top-200">
      <div className="flex flex-col m-auto ml-0 font-mono">
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-black font-bold text-2xl mb-4 hover:underline hover:cursor-pointer"
        >
          About me
        </h1>
        <div className="sm:m-0 sm:mb-4 sm:text-sm font-mono">
          <h1>
            <a href="mailto:l.trung.k.ai@gmail.com">l.trung.k.ai@gmail.com</a>
          </h1>
          <h1>
            <a href="tel:+4560698779">+45 60 69 87 79</a>
          </h1>
        </div>
        <h1
          onClick={() => window.scrollTo({ top: 750, behavior: "smooth" })}
          className="font-black font-bold text-2xl mb-4 hover:underline  hover:cursor-pointer"
        >
          Experiences
        </h1>
        <h1
          onClick={() => window.scrollTo({ top: 4500, behavior: "smooth" })}
          className="font-black font-bold text-2xl mb-4 hover:underline  hover:cursor-pointer"
        >
          Education
        </h1>
      </div>
    </div>
  );
};
