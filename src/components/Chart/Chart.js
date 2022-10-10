import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.Value);
  const totalMax = Math.max(...dataPointValue);
  console.log(totalMax);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.Value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
