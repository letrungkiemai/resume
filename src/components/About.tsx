import { Graph } from "./ExpGraph";

export const About = () => {
  return (
    <div className="m-8">
      <h1 className="font-black font-bold text-2xl mb-4" id="about-section">
        About me
      </h1>
      <p className="text-justify">
        I am a full-stack developer with strongest skills in React and React
        based libraries, Express NodeJS backend written with TypeScript. But
        that's not all, over the past 7 years I have had the opportunities to
        work with a wide variety of technologies, programming languages, and
        have participated in engineering platform infrastructures to build and
        maintain web applications.
      </p>
      <br />
      <p className="text-justify">
        I love learning and developing new skills but what I am most passionate
        about is to work with and provide simple yet robust and sustainable
        solutions to the various and ever demanding software development sphere.
        There are a lot of new technologies and new programming languages, new
        fancy buzzwords springing up every day which I do not believe in. I
        strongly believe in developing the person not the tools, I believe in
        developing problem solving skills, good knowledge and expertise in what
        one works with and the passion to build good user-oriented applications.
        And these are the things I personally aim for.
      </p>
      <br />
      <p className="text-justify">
        I am originally from Vietnam. Moved to Denmark in 2014 and have
        established permanent residency here.
      </p>
      <Graph></Graph>
    </div>
  );
};
