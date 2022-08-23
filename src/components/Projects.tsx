import { CompanySection } from "./CompanySection";
import cc from "../cc.svg";

export const Projects = () => {
  return (
    <div className="m-8">
      <h1 className="font-bold text-2xl mb-4  hover:underline" id="edu-section">
        <a href="https://www.culturecat.dk">Culture Cat</a>
      </h1>
      <div>
        <CompanySection
          key={13}
          name="Culture Cat - searching for events around Copenhagen"
          title="Volunteer Web Developer"
          length="2021-2022"
          logo={cc}
          location="København, Capital Region, Denmark"
          summary="During the summer of 2021 I volunteered to help developing Culture Cat - a really cool site for searching for events happening all around Copenhagen."
          bulletPoints={[
            "The website is developed purely on HTML, JavaScript and CSS with the power of Web Components.",
            "I participated in engineering core parts on the editing side and presentation side and defining the front-end architecture using Web Components and Firebase for Authentication. Here I also learned a bit about Azure functions, CosmoDB, and working with browser extensions.",
          ]}
        ></CompanySection>
      </div>
    </div>
  );
};
