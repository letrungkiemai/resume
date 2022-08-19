import { CompanySection } from "./CompanySection";
import gb from "../gb.jpeg";
import lb from "../lb.jpeg";
import mc from "../mc.jpeg";
import gt from "../gt.jpeg";
import wb from "../wb.jpeg";
import dx from "../dx.jpeg";
import an from "../an.svg";

export const Exp = () => {
  return (
    <div className="m-8">
      <h1 className="font-bold text-2xl mb-4" id="exp-section">
        Experiences
      </h1>
      <div>
        <CompanySection
          key={1}
          name="Goodiebox"
          title="Senior Full Stack Developer"
          length="Sep 2020 - Present"
          logo={gb}
          location="København, Capital Region, Denmark"
          summary="Participated in a talented Tech team building and managing the Goodiebox e-commerce system and mini services from subscription to operation."
          bulletPoints={[
            "Engineer solutions to implement new features and/or integrations.",
            "Help and provide guidance for junior developers in implementing tasks. Review PRs and give suggestions on improving code readability, structure and efficiency.",
            "Consult Head of Tech regarding estimates, infrastructure and implementation specifics, give insights into resolving tech debs and making improvements.",
            "Participate in implementing core parts of the system, resolving ad-hoc requests.",
            "Backend: Express Node.js apps and cloud functions written with TypeScript and hosted on Google Cloud Platform. Maintain and develop multiple mini services built with event-driven architecture. Work with Postgres, BigQuery, Firebase Auth and Firestore database. Building integration with 3rd party platforms for subscription, payment, logistics and e-commerce.",
            "Frontend: TypeScript React apps built with NextJS, react-admin.",
          ]}
        ></CompanySection>
        <CompanySection
          key={2}
          name="LetsBuild"
          title="Full Stack Developer"
          length="Aug 2017 - Sep 2020"
          logo={lb}
          location="København, Capital Region, Denmark"
          summary="Aspiring full-stack developer with Angular-React for front-end & Ruby on Rails as back-end."
          bulletPoints={[
            "Learn and develop my skills in programming web applications with AngularJS and React for front end, and Ruby on Rails backend (developing both REST API and GraphQL API) with Postgres database.",
            "Participate in a fast growing team with the mission of breaking down monolithic infrastructure into simpler and more flexible microservices hosted on AWS that communicate to each other mainly through RabbitMQ as messages broker.",
            "Working with Docker, TeamCity and Github Workflow for CI/CD.",
            "Working with a range of application monitoring and tracing tools such as InfluxDB, Grafana, Sentry and Elastic APM.",
            "Mostly worked as a full stack developer - developing new features by writing API for the backend and creating React components for the front end. For the last 6 months, I have mostly focused on micro-frontend architecture by developing React components in TypeScript as npm packages bundled with Rollup.",
          ]}
        ></CompanySection>
        <CompanySection
          key={3}
          name="Mat Cao"
          title="Project manager & Developer"
          length="Jun 2016 - Aug 2017"
          logo={mc}
          location="København, Capital Region, Denmark / Ho Chi Minh city, Vietnam"
          summary="Tackling the challenges of finding a good balance between managing a software project and accumulating programming experiences. Mat Cao is a Vietnam-based company that provides various software solutions for some long-term customers in Denmark, among those are Danx (fleet management system) and Gratisal (payroll system)."
          bulletPoints={[
            "Tasks in project management involve creating issues based on the customer's requirement, making sure the features pass QA, ensuring sprint plans are achieved, etc.",
            "Tasks in development involve working on the front-end with the HTML web app using the latest TypeScript and AngularJS, sometimes doing a bit C# with the API back-end, and enjoying learning from the other senior developers.",
            "My latest project is a small web app for EuroStudy built from scratch using Angular CLI and the latest rising star Angular 4. It was an exciting experience where I get to expand my Angular territory and get wonderful feedback from the product owner.",
          ]}
        ></CompanySection>
        <CompanySection
          key={4}
          name="Gratisal ApS"
          title="Developer Intern"
          length="Apr 2016 - Jun 2016"
          logo={gt}
          location="Ho Chi Minh city, Vietnam"
          summary="During the 2 months of internship I learnt a lot about offshore project management, how an Agile project works and be part of the Agile process, programming in TypeScript using Kendo UI to create web app components, and adding to my experiences with AngularJS."
          bulletPoints={[
            "Participate in creating the Time entry module in Gratisal app for my final semester project in KEA.",
            "The project is developed in TypeScript and AngularJS.",
          ]}
        ></CompanySection>
        <CompanySection
          key={5}
          name="WorkBook Software"
          title="Tester and Frontend Developer"
          length="Oct 2015 - Apr 2016"
          logo={wb}
          location="Copenhagen Area, Capital Region, Denmark"
          summary="Making use of my previous experiences in Software testing while developing skills in frontend web development."
          bulletPoints={[
            "Participate in the development of WorkBook version 9, developed in HTML/CSS and JQuery.",
            "Perform manual testing of the WorkBook software application.",
          ]}
        ></CompanySection>
        <CompanySection
          key={6}
          name="Danx Group"
          title="IT Project Coordinator"
          length="Aug 2014 - Jan 2015"
          logo={dx}
          location="Copenhagen Area, Capital Region, Denmark"
          summary="Danx is a transportation company, and has started to use AlgoPlanner since 2014. My task at Danx was to support the operational team in using AlgoPlanner, and act as a Product Owner role to the development team in Vietnam."
          bulletPoints={[]}
        ></CompanySection>
        <CompanySection
          key={7}
          name="Mat Cao"
          title="Testing & Documentation / Office Assistant"
          length="May 2010 - Jul 2014"
          logo={mc}
          location="Ho Chi Minh City, Vietnam"
          summary="Mat Cao was where I started my career path towards software development."
          bulletPoints={[
            "As Office Assistant, I managed a wide variety of tasks, such as: HR management - which requires experiences and knowledge in recruitment, salary, labor law, social insurances law; taking responsibility in creating and managing payroll, preparing online payment transfer, ensuring the updates and application of any labor and social insurances changes; tax calculations, making HR budget; assisting the Director in communications with the staff and understanding of cultural differences; preparing important business documents, such as company policy, work contract, collective labor agreement, business contracts and invoices; office administration – managing documentation, arranging business activities, welcoming guests and business partners; preparing documents and assisting foreign guests in applying for visa, bank account opening, work permit, temporary residency card; personal assistant to the director – acting as interpreter and assisting in arranging vehicles or discussing contract terms with Vietnamese suppliers; preparing documentation for projects – writing description for IT projects, and taking some small part in the project development procedure; researching and translating Vietnam's business laws and regulations for the director's reference.",
            "My career move towards software development started when I developed interests in working more closely with the software that the company was developing. Tasks included: Software testing & Software documentation for AlgoPlanner project, a transportation planning system. (http://www.algoplanner.com). The application is developed for web, android and Windows Mobile platform. I have written many types of documentation, from project contract to description of logic for some important part of the application, and also have re-written the full logic for implementation of AlgoPlanner on the Windows Mobile. Developer intern: I have learned how to code in C# in Visual Studio by reading existing code and fix some small logical errors.",
            "After moving to Denmark in January 2014, I continued working part time with the AlgoPlanner project, however I wanted to go deeper into programming, and as an intern I found it hard to improve fast working from a distance due to the communication difficulties. Therefore I stopped working for Mat Cao.",
          ]}
        ></CompanySection>
        <CompanySection
          key={8}
          name="AkzoNobel Vietnam"
          title="Purchasing Staff"
          length="Feb 2009 - Aug 2009"
          logo={an}
          location="Ho Chi Minh City, Vietnam"
          summary="Handling purchases in coordination with Planning department and managing and resolving issues to ensure uninterrupted production chain in the factories."
          bulletPoints={[]}
        ></CompanySection>
        <CompanySection
          key={9}
          name="Aquarius Trading Co., Vietnam"
          title="Merchandiser Assistant"
          length="Jun 2008 - Aug 2008"
          logo={an}
          location="Ho Chi Minh City, Vietnam"
          summary="Internship in the import/export services."
          bulletPoints={[]}
        ></CompanySection>
      </div>
    </div>
  );
};
