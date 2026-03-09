import * as d3 from "d3";
import React from "react";
export const Graph = () => {
  const ref = React.useRef<SVGSVGElement | null>(null);

  const width = 1100;
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
      yearEnd: 2026,
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
      yearEnd: 2026,
      color: getRandomColor(),
    },

    {
      name: "React/NextJS",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2017,
      yearEnd: 2026,
      color: getRandomColor(),
    },
    {
      name: "GraphQL",
      project: ["Gratisal", "GenieBelt", "GoWish"],
      yearStart: 2018,
      yearEnd: 2026,
      color: getRandomColor(),
    },
    {
      name: "Postgres",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2017,
      yearEnd: 2026,
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
      yearEnd: 2025,
      color: getRandomColor(),
    },
    {
      name: "NodeJS/ExpressJS",
      project: ["Gratisal", "GenieBelt"],
      yearStart: 2019,
      yearEnd: 2026,
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
      yearEnd: 2026,
      color: getRandomColor(),
    },
    {
      name: "Neo4J",
      project: ["GoWish"],
      yearStart: 2024,
      yearEnd: 2026,
      color: getRandomColor(),
    },
    {
      name: "Web development",
      project: ["GoWish"],
      yearStart: 2015,
      yearEnd: 2026,
      color: getRandomColor(),
    },
    {
      name: "Mobile development",
      project: ["GoWish"],
      yearStart: 2023,
      yearEnd: 2026,
      color: getRandomColor(),
    },
     {
      name: "React-native",
      project: ["GoWish"],
      yearStart: 2024,
      yearEnd: 2025,
      color: getRandomColor(),
    },
     {
      name: "Flutter/Dart",
      project: ["GoWish"],
      yearStart: 2025,
      yearEnd: 2026,
      color: getRandomColor(),
    },
  ];

  const yPostStart = 500;
  data = data.map((d, idx) => ({ ...d, yPos: yPostStart - 30 * idx }));
  console.log(`data`, data);
  const drawElm = (ref: SVGSVGElement) => {
    const svg = d3.select(ref).attr("width", width).attr("height", height);
    svg.selectAll("*").remove();

    const xScale = d3
      .scaleLinear()
      .domain([2014, 2027])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleBand<string>()
      .domain(data.map((d) => d.name))
      .range([margin.top, height - margin.bottom])
      .padding(0.2);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).ticks(14).tickFormat(d3.format("d")));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));

    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d.yearStart))
      .attr("y", (d) => yScale(d.name) || margin.top)
      .attr("width", (d) => xScale(d.yearEnd) - xScale(d.yearStart))
      .attr("height", yScale.bandwidth())
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("fill", (d) => d.color)
      .attr("opacity", 0.5);

    svg
      .append("g")
      .selectAll("text")
      .data(data)
      .join("text")
      .text((d) => d.name)
      .attr("x", (d) => xScale(d.yearStart) + 8)
      .attr("y", (d) => (yScale(d.name) || margin.top) + yScale.bandwidth() / 2)
      .attr("dominant-baseline", "middle")
      .attr("fill", "#111")
      .attr("font-size", 12)
      .attr("pointer-events", "none");
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
