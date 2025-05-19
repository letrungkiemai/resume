export const CompanySection = ({
  name,
  logo,
  title,
  length,
  location,
  summary,
  bulletPoints,
}: {
  name: string;
  logo: string;
  title: string;
  length: string;
  summary: string;
  location: string;
  bulletPoints: string[];
}) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex flex-row ml-0 mb-4 mt-4">
        <div className="basis-32 sm:block hidden">
          <img
            className="rounded-full"
            style={{ maxWidth: "100px" }}
            src={logo}
            alt="logo"
          ></img>
        </div>
        <div>
          <h1 className="font-bold text-xl">{name.toLocaleUpperCase()}</h1>
          <h1 className="font-bold italic text-xl">{title}</h1>
          <h1>{length}</h1>
          <h1>{location}</h1>
        </div>
      </div>
      <div className="border-b"></div>
      <div className="mt-4 text-justify">
        <p className="italic font-bold">{summary}</p>
        {bulletPoints.map((content, index) => (
          <div key={index}>- {content}</div>
        ))}
      </div>
    </div>
  );
};
