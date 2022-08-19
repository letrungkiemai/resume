import { CompanySection } from "./CompanySection";
import ftu from "../ftu.jpeg";
import kea from "../kea.jpeg";

export const Edu = () => {
  return (
    <div className="m-8">
      <h1 className="font-bold text-2xl mb-4" id="edu-section">
        Education
      </h1>
      <div>
        <CompanySection
          key={10}
          name="KEA - Københavns Erhvervsakademi"
          title="AP in Computer Science"
          length="2014 - 2016"
          logo={kea}
          location="København, Capital Region, Denmark"
          summary=""
          bulletPoints={[]}
        ></CompanySection>
        <CompanySection
          key={11}
          name="Foreign Trade University - Ho Chi Minh City"
          title="Bachelor Degree in Foreign Economics"
          length="2005 - 2010"
          logo={ftu}
          location="Ho Chi Minh City, Vietnam"
          summary=""
          bulletPoints={[]}
        ></CompanySection>
      </div>
    </div>
  );
};
