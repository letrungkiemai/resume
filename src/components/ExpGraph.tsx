import * as d3 from "d3";
import React from "react";
export const Graph = () => {
  const ref = React.useRef<SVGSVGElement | null>(null);

  const width = 1400;
  const height = 700;
  const margin = { top: 60, right: 60, bottom: 60, left: 120 };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  type Data = {
    name: string;
    project: string[];
    yearStart: number;
    yearEnd: number;
    color: string;
    yPos?: number;
  };

  let data: Data[] = [
    {
      name: "AngularJS",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2015,
      yearEnd: 2019,
      color: getRandomColor(),
    },
    {
      name: "JavaScript",
      project: ["LetsBuild", "Gratisal", "Goodiebox"],
      yearStart: 2015,
      yearEnd: 2023,
      color: getRandomColor(),
    },
    {
      name: "Ruby on Rails",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2017,
      yearEnd: 2019,
      color: getRandomColor(),
    },
    {
      name: "TypeScript",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2018,
      yearEnd: 2023,
      color: getRandomColor(),
    },

    {
      name: "React/NextJS",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2017,
      yearEnd: 2023,
      color: getRandomColor(),
    },
    {
      name: "GraphQL",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2018,
      yearEnd: 2019,
      color: getRandomColor(),
    },
    {
      name: "Postgres",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2017,
      yearEnd: 2023,
      color: getRandomColor(),
    },
    {
      name: "C# .NET",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2019,
      yearEnd: 2020,
      color: getRandomColor(),
    },
    {
      name: "Web Components",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2021,
      yearEnd: 2022,
      color: getRandomColor(),
    },
    {
      name: "Google Cloud Platform",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2020,
      yearEnd: 2023,
      color: getRandomColor(),
    },
    {
      name: "NodeJS/ExpressJS",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2019,
      yearEnd: 2023,
      color: getRandomColor(),
    },
    {
      name: "AWS",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2018,
      yearEnd: 2020,
      color: getRandomColor(),
    },
    {
      name: "Azure functions",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2021,
      yearEnd: 2022,
      color: getRandomColor(),
    },
    {
      name: "Integrations",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2020,
      yearEnd: 2023,
      color: getRandomColor(),
    },
  ];

  const yPostStart = 500;
  data = data.map((d, idx) => ({ ...d, yPos: yPostStart - 30 * idx }));
  console.log(`data`, data);
  const drawElm = (ref: SVGSVGElement) => {
    const svg = d3.select(ref).attr("width", width).attr("height", height);

    const xAxis = d3
      .scaleUtc()
      .domain([new Date("2014-01-01"), new Date("2023-01-01")])
      .range([margin.left, width]);

    svg.append("g").call((g) => {
      g.attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xAxis))
        .call((g) =>
          g
            .append("text")
            .attr("x", 30)
            .attr("y", 16)
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr("text-anchor", "end")
            .attr("class", "axis-label")
            .text("Year")
        );
    });

    const leaf = svg.selectAll("circle").data(data);

    leaf
      .join("circle")
      .attr("cx", (d) => margin.left + (d.yearStart - 2014) * (width / 9))
      .attr("cy", (d) => d.yPos || yPostStart)
      .attr("r", (d) => (d.yearEnd - d.yearStart) * 20)
      .attr("fill", (d) => d.color)
      .attr("opacity", 0.3)
      .attr("stroke", (d) => d.color);

    leaf
      .join("text")
      .text((d) => d.name)
      .attr("x", (d) => margin.left + ((d.yearStart - 2014) * (width / 9) - 20))
      .attr("y", (d) => d.yPos || yPostStart);
  };

  React.useEffect(() => {
    if (ref.current && !ref.current.children.length) {
      drawElm(ref.current);
    }
  });

  return (
    <div className="svg">
      <svg className="container" ref={ref} width="100" height="100"></svg>
    </div>
  );
};
