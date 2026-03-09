import { CompanySection } from "./CompanySection";
import gb from "../gb.jpeg";
import lb from "../lb.jpeg";
import mc from "../mc.jpeg";
import gt from "../gt.jpeg";
import wb from "../wb.jpeg";
import cs from "../cs.jpeg";
import os from "../os.jpeg";
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
          name="Clair Scientific"
          title="Senior Fullstack Developer"
          length="Sep 2025 - Mar 2026"
          logo={cs}
          location="Herlev, Denmark"
          summary="Build intuitive user interface for modern microscope"
          bulletPoints={[
           "Translated unrefined feature requests into executable UX/UI specifications and implemented Linux and web-based remote interface for a microscope device using Dart/Flutter.",
"Setup automated and integration tests pipeline, raised automated test coverage from 0 to 75%+, improved product stability and strengthen release pipeline.",
"Implemented and maintained API/websocket backend in Python and MySQL. Improved documentation with FastAPI and mkdocs."
          ]}
        ></CompanySection>
          <CompanySection
          key={1}
          name="Ønskeskyen"
          title="Engineering Team Lead/ Senior Fullstack Engineer"
          length="Mar 2023 - Aug 2025"
          logo={os}
          location="Copenhagen, Denmark"
          summary="Build highly scalable wishlist app for millions of users"
          bulletPoints={[
           "Led a cross-functional engineering team (backend, frontend, full stack) to deliver the Creator Platform for GoWish/Ønskeskyen within a strict timeline, driving end-to-end execution from requirements clarification through release while meeting business expectations.",
           "Owned technical direction for a wide range of platform components based on highly scalable event driven architecture, applying best practice in system design to support reliable asynchronous workflows and maintainable service boundaries.",
"Drive frictionless cross-team collaboration by clarifying requirements and aligning context upfront, ensuring uninterrupted delivery velocity and minimizing dependency bottlenecks.",
"Coached and mentored engineers by setting clear expectations, reviewing work, and helping team members grow ownership and technical maturity while maintaining a high-trust team culture.",
"Provided hands-on implementation across mobile, web, and backend services, contributing directly in development and maintenance to ensure timely delivery and consistent quality.",
"Implemented authentication integrations for the mobile and web app, including SSO with Meta and Google OAuth, to support secure user access across platforms."
          ]}
        ></CompanySection>
        <CompanySection
          key={1}
          name="Goodiebox"
          title="Senior Full Stack Developer"
          length="Sep 2020 - Present"
          logo={gb}
          location="København, Capital Region, Denmark"
          summary="Build e-commerce system and mini services to manage subscription, payment and delivery"
          bulletPoints={[
           "Owned end-to-end development and operations of the Goodiebox membership subscription and payment platform, including logistics and operational integration with third-party providers; guarantee absolute stability and error-free operation in production; implementing ad-hoc business requests and assisting customer support team.",
"Designed and built Goodiepay, an in-house non-monetary payment microservice, ensure seamless integration with the subscription - payment - delivery flow.",
"Partnered with the Head of Tech on delivery estimates, infrastructure choices, and implementation approach; translated business needs into maintainable full-stack solutions and drove performance and code quality improvements across core services.",
"Guided and mentored junior developers in a team of 5+ by reviewing pull requests, unblocking implementation details, and raising engineering standards around readability, structure, and efficiency."
          ]}
        ></CompanySection>
        <CompanySection
          key={2}
          name="LetsBuild"
          title="Full Stack Developer"
          length="Aug 2017 - Sep 2020"
          logo={lb}
          location="København, Capital Region, Denmark"
          summary="Build construction project management system"
          bulletPoints={[
           "Delivered full-stack web applications with AngularJS/React front ends and Ruby on Rails (REST/GraphQL) services on PostgreSQL. ",
"Drove the migration from monolith to AWS-based microservices, implemented Dockerized CI/CD pipelines, and strengthened observability with structured monitoring and tracing to improve scalability and operational reliability."
          ]}
        ></CompanySection>
        <CompanySection
          key={3}
          name="Mat Cao"
          title="Project manager & Developer"
          length="Jun 2016 - Aug 2017"
          logo={mc}
          location="København, Capital Region, Denmark / Ho Chi Minh city, Vietnam"
          summary="Build software solutions for fleet management system and payroll system."
          bulletPoints={[
            "Led end-to-end feature delivery by translating customer requirements into sprint execution plans, driving on-time completion, and enforcing QA validation to ensure production readiness. Delivered and maintained front-end features in TypeScript and AngularJS across the full development lifecycle.",
          ]}
        ></CompanySection>
        <CompanySection
          key={4}
          name="Gratisal ApS"
          title="Developer Intern"
          length="Apr 2016 - Jun 2016"
          logo={gt}
          location="Ho Chi Minh city, Vietnam"
          summary="Build Time Entry module"
          bulletPoints={[
            "Designed and delivered the Time Entry module for the Gratisal application, building reusable TypeScript/AngularJS components and integrating seamlessly into existing workflows. Improved maintainability and reliability by translating requirements into structured client-side architecture and proactively resolving UI defects.",
          ]}
        ></CompanySection>
        <CompanySection
          key={5}
          name="WorkBook Software"
          title="Tester and Frontend Developer"
          length="Oct 2015 - Apr 2016"
          logo={wb}
          location="Copenhagen Area, Capital Region, Denmark"
          summary="Test and build front end for ERP system"
          bulletPoints={[
            "Contributed to WorkBook v9 by combining hands-on QA testing with front-end development in HTML, CSS, and jQuery to support stable feature delivery. Improved release quality by validating cross-browser behavior, documenting defects, and partnering with developers to isolate root causes and verify fixes.",
          ]}
        ></CompanySection>
        <CompanySection
          key={6}
          name="Danx Group"
          title="IT Project Coordinator"
          length="Aug 2014 - Jan 2015"
          logo={dx}
          location="Copenhagen Area, Capital Region, Denmark"
          summary=""
          bulletPoints={["Support the operational team in using AlgoPlanner, and act as a Product Owner role to the development team in Vietnam."]}
        ></CompanySection>
        <CompanySection
          key={7}
          name="Mat Cao"
          title="Testing & Documentation / Office Assistant"
          length="May 2010 - Jul 2014"
          logo={mc}
          location="Ho Chi Minh City, Vietnam"
          summary=""
          bulletPoints={[
            "Mat Cao was where I started my career path towards software development."
          ]}
        ></CompanySection>
        <CompanySection
          key={8}
          name="AkzoNobel Vietnam"
          title="Purchasing Staff"
          length="Feb 2009 - Aug 2009"
          logo={an}
          location="Ho Chi Minh City, Vietnam"
          summary=""
          bulletPoints={["Handling purchases in coordination with Planning department and managing and resolving issues to ensure uninterrupted production chain in the factories."]}
        ></CompanySection>
        <CompanySection
          key={9}
          name="Aquarius Trading Co., Vietnam"
          title="Merchandiser Assistant"
          length="Jun 2008 - Aug 2008"
          logo={an}
          location="Ho Chi Minh City, Vietnam"
          summary=""
          bulletPoints={["Internship in the import/export services."]}
        ></CompanySection>
      </div>
    </div>
  );
};
