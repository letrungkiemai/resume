import { Graph } from "./ExpGraph";

export const About = () => {
  return (
    <div className="m-8">
      <h1 className="font-black font-bold text-2xl mb-4" id="about-section">
        About me
      </h1>
      <p className="text-justify">
        Senior Full-Stack Developer with 10 years of experience in building, integrating and maintaining cloud-native web and mobile platforms. Hands-on with TypeScript/JavaScript, React Native, Next.js, NestJS (GraphQL/REST), Kafka, Kubernetes, Docker, GCP, and PostgreSQL. Led cross-functional teams and delivered scalable backends for applications used by millions. Proven quick adaptation to new challenges, and drive to perform exceeding expectations. Highly passionate about expanding experiences with multiple programming languages and frameworks.
      </p>
      <div className="sm:block hidden">
        <Graph></Graph>
        <p className="text-justify italic">
          *** Technologies and experiences
        </p>
      </div>
    </div>
  );
};
