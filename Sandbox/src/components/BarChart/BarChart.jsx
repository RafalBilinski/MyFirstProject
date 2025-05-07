import "./BarChart.css";
import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";

const title = "US GDP over years";
const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

function BarChart() {
  const [data, setData] = useState([]);
  const paddingLeft = 40;
  const paddingRest = 20;
  const [windowSize, setWindowSize] = useState({
    calculatedWidth: Math.min(window.innerWidth * 0.8, 900), // Set width to 80% of window width or max 900px
    calculatedHeight: Math.min(window.innerHeight * 0.7 - 80, 600), // Set height to 70% of window height or max 600px
  });
  let chartWidth = windowSize.calculatedWidth;
  let chartHeight = windowSize.calculatedHeight;

  const fetchData = async () => {
    try {
      const response = await fetch(dataURL);
      const result = await response.json();
      setData(result.data);
      localStorage.setItem("data", JSON.stringify(result.data)); // Store data in localStorage
      if (data) {
        console.log("data fetch succesful");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const yearsToDisplay = data.map((item) => {
    let quarter;
    let temp = item[0].substring(5, 7);
    switch (temp) {
      case "01":
        quarter = "Q1";
        break;
      case "04":
        quarter = "Q2";
        break;
      case "07":
        quarter = "Q3";
        break;
      case "10":
        quarter = "Q4";
        break;
      default:
        quarter = "?";
    }
    return item[0].substring(0, 4) + " " + quarter + ", ";
  });

  const GDPToDisplay = data.map((item) => {
    return String(item[1]) + " Bilion $";
  });

  // Creating SVG Chart
  const chartSvg = useRef(null);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        calculatedWidth: Math.min(window.innerWidth * 0.8, 900),
        calculatedHeight: Math.min(window.innerHeight * 0.7 - 80, 600),
      });
    }
    window.addEventListener("resize", handleResize);

    if (data.length === 0) {
      // Check if data is empty
      setData(JSON.parse(localStorage.getItem("data"))); // Retrieve data from localStorage
      if (!data) {
        // If data is still empty, fetch it
        fetchData();
        console.log("Fetching data...");
      }
    }

    if (data && chartSvg.current) {
      chartWidth = windowSize.calculatedWidth;
      chartHeight = windowSize.calculatedHeight;
      const svg = d3.select(chartSvg.current); // D3 code
      const yMax = d3.max(data, (d) => d[1]);
      const dateX = (data) => new Date(data);
      const xMin = d3.min(data, (d) => dateX(d[0]));
      const xMax = d3.max(data, (d) =>
        dateX(d[0]).setMonth(dateX(d[0]).getMonth() + 3)
      );

      const xScale = d3 // x Scale
        .scaleTime()
        .domain([xMin, xMax])
        .range([paddingLeft, chartWidth - paddingRest]);

      const yScale = d3 // y Scale
        .scaleLinear()
        .domain([0, yMax])
        .range([chartHeight - paddingRest, paddingRest]);

      const xTicks = parseInt((chartWidth - paddingLeft - paddingRest) / 35); // 35px for each x tick
      svg
        .append("g") // x Axis
        .attr("transform", "translate(0," + (chartHeight - paddingRest) + ")")
        .call(d3.axisBottom(xScale).ticks(xTicks))
        .attr("id", "x-axis");

      const yTicks = parseInt((chartHeight - 2 * paddingRest) / 25); // 25px for each y tick
      svg
        .append("g") // y Axis
        .attr("transform", "translate(" + paddingLeft + ",0" + ")")
        .call(d3.axisLeft(yScale).ticks(yTicks))
        .attr("id", "y-axis");

      svg
        .append("g") // y grid
        .attr("class", "grid")
        .call(
          d3
            .axisLeft(yScale)
            .ticks(yTicks)
            .tickSize(-chartWidth + paddingRest + paddingLeft)
            .tickFormat("")
        )
        .attr("transform", "translate(" + paddingLeft + ",0" + ")");

      svg.selectAll(".grid line").style("stroke-opacity", 0.3);

      svg.selectAll(".grid path").style("stroke-width", 0);

      const handlemouseover = (target) => {
        // bars
        const barId = target.getAttribute("barId");
        d3.select("#tooltip")
          .text(` ${yearsToDisplay[barId] + GDPToDisplay[barId]}`)
          .classed("invisible", false);
        d3.select("#tooltip").attr(
          "data-date",
          `${target.getAttribute("data-date")}`
        );
      };

      const handlemouseout = (event) => {
        d3.select("#tooltip").text("").classed("invisible", true);
      };

      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(dateX(d[0])))
        .attr("y", (d) => yScale(d[1]))
        .attr("width", (chartWidth - paddingLeft - paddingRest) / data.length)
        .attr("height", (d) => chartHeight - paddingRest - yScale(d[1]))
        .attr("class", "bar")
        .attr("data-date", (d) => d[0])
        .attr("data-gdp", (d) => d[1])
        .attr("barId", (_d, i) => i)
        .on("mouseover", ({ target }) => handlemouseover(target))
        .on("mouseout", ({ target }) => handlemouseout(target));

      const tooltipXposition = chartWidth / 6;
      svg
        .append("text") // Tooltip
        .attr("id", "tooltip")
        .attr("class", "invisible")
        .attr("x", tooltipXposition)
        .attr("y", "60")
        .style("height", "10rem")
        .style("width", "max-content")
        .style("fill", "var(--font-color2)")
        .style("text-shadow", "2px 2px 10px var(--background-color2)");
      console.log("SVG chart created successfully");
    }
    return () => {
      d3.select(chartSvg.current).selectAll("*").remove(); // Cleanup SVG elements on unmount
      console.log("SVG chart cleaned up");
    };
  }, [data, window.innerWidth, innerHeight]); // Effect runs when data changes

  return (
    <div className="container">
      <div className="bar-chart" id="bar-chart">
        <h1 id="bar-chart-title">{title}</h1>
        <svg
          className="d3-component"
          width={chartWidth}
          height={chartHeight}
          ref={chartSvg}
        />
      </div>
    </div>
  );
}

export default BarChart;
