import React from "react";
import Svg, { G, Path, Polyline, Text } from "react-native-svg";
import { COLORS } from "../../../services/colors";

export default function RadarChart({
  graphSize,
  scaleCount,
  numberInterval,
  data,
  options,
}) {
  const boxSize = graphSize * 3;
  const centerPos = boxSize / 2;

  // Top start pos -90 degree
  const posX = (angle, distance) =>
    Math.cos(angle - Math.PI / 2) * distance * graphSize;
  const posY = (angle, distance) =>
    Math.sin(angle - Math.PI / 2) * distance * graphSize;

  const initPath = (points) => {
    if (!Array.isArray(points) || points.length === 0 || !Array.isArray(points[0])) {
        console.error("Invalid points array:", points);
        return ""; // Return an empty string to avoid errors
    }

    let d = `M${points[0][0].toFixed(4)},${points[0][1].toFixed(4)}`;
    
    for (let i = 1; i < points.length; i++) {
        if (!Array.isArray(points[i]) || points[i].length < 2) {
            console.warn("Skipping invalid point:", points[i]);
            continue;
        }
        d += `L${points[i][0].toFixed(4)},${points[i][1].toFixed(4)}`;
    }

    return d + "z"; // Closing the path
};


  const scaleShape = (columns, i) => {
    const scaleColor = options.scaleColorList ? options.scaleColorList[i] : "gray";
    const isDotted = options.scaleDotList ? options.scaleDotList[i] : false;
    const dotPattern = isDotted ? "20,20" : "0,0"; // Dotted if true

    return (
      <Path
        key={`shape-${i}`}
        d={initPath(
          columns.map((column) => {
            return [
              posX(column.angle, i / scaleCount),
              posY(column.angle, i / scaleCount),
            ];
          })
        )}
        stroke={scaleColor}
        fill={COLORS.backgroundColor}
        fillOpacity="1"
        strokeDasharray={dotPattern} // Dotted or solid
      />
    );
  };

  const shape = (columns) => (chartData, i) => {
    const data = chartData;
    const dot = options.dotList[i] === true ? "20,20" : "0,0";

    return (
      <Path
        key={`shape-${i}`}
        d={initPath(
          columns.map((column) => {
            return [
              posX(column.angle, data[column.key]),
              posY(column.angle, data[column.key]),
            ];
          })
        )}
        strokeDasharray={dot}
        stroke={"rgba(40, 181, 225, 1)"}
        strokeWidth="10.5"
        fill={"rgba(40, 181, 225, 0.1)"}
        fillOpacity="1"
      />
    );
  };




  const points = (points) => {
    return points
      .map((point) => point[0].toFixed(4) + "," + point[1].toFixed(4))
      .join(" ");
  };

  const axis = () => (column, i) => {
    return (
      <Polyline
        key={`poly-axis-${i}`}
        points={points([
          [0, 0],
          [posX(column.angle, 1.05), posY(column.angle, 1.05)],
        ])}
        stroke="rgba(228, 234, 240, 1)"
        strokeWidth="3"
      />
    );
  };

  const label = () => (column) => {
    return (
      <Text
        key={`label-of-${column.key}`}
        x={posX(column.angle, 1.3)}
        y={posY(column.angle, 1.25)}
        dy={10 / 2}
        fill="rgba(154, 159, 161, 1)"
        fontWeight="400"
        fontSize="30"
        textAnchor="middle"
        fontFamily="Roboto-Regular"
      >
        {column.key}
      </Text>
    );
  };

  const textIndicator = (i) => {
    return (
      <Text
        x={-20}
        y={-((i / scaleCount) * graphSize)}
        fill={COLORS.backgroundColor}
        fontWeight="bold"
        fontSize="30"
        textAnchor="middle"
      >
        {}
      </Text>
    );
  };

  const groups = [];
  const labels = Object.keys(data[0]);

  const columns = labels.map((key, i, arr) => {
    return {
      key,
      angle: (Math.PI * 2 * i) / arr.length,
    };
  });

  for (let i = scaleCount; i >= 0; i--) {
    groups.push(<G>{scaleShape(columns, i)}</G>);
  }

  groups.push(<G key={`groups}`}>{data.map(shape(columns))}</G>);
  groups.push(<G key={`group-captions`}>{columns.map(label())}</G>);

  if (options.showAxis)
    groups.push(<G key={`group-axes`}>{columns.map(axis())}</G>);

  if (options.showIndicator) {
    for (let i = 0; i <= scaleCount; i++) {
      if (i % numberInterval == 0)
        groups.push(<G key={`group-eiei`}>{textIndicator(i)}</G>);
    }
  }
  return (
    <Svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={graphSize}
      height={graphSize}
      viewBox={`0 0 ${boxSize} ${boxSize}`}
    >
      <G transform={`translate(${centerPos},${centerPos})`}>{groups}</G>
    </Svg>
  );
}