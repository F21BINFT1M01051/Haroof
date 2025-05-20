import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { COLORS } from "../../../services/colors";

const {width, height} = Dimensions.get('window')
const GiftedChart2 = () => {
  const [tooltip, setTooltip] = useState(null);

  const dataSet = {
    data: [
      { value: 3000, label: "09. Mo" },
      { value: 6000, label: "10. Tue" },
      { value: 4000, label: "11. Wed" },
      { value: 10000, label: "12. Thu" },
      { value: 5000, label: "13. Fri" },
      { value: 13000, label: "14. Sat" },
      { value: 4000, label: "15. Sun" },
    ],
    zIndex: 1,
    thickness: 4,
    areaChart: true,
    color: 'transparent', // Line color
    startFillColor: 'transparent', // Area chart start color (semi-transparent)
    endFillColor: 'transparent', // Area chart end color (semi-transparent)
    hideDataPoints: false, // Hide data points
    showArrow: true,
    curved: true,
    curveType: "bezier", // Smooth curve
    dataPointsRadius: 3,
    dataPointsColor:'transparent',
    dataPointsShape: "circle", // Custom data point shape
    startOpacity: 0.2,
    endOpacity: 0.2,
  };

  const handleDataPointClick = (item, index) => {
    console.log("Data point clicked:", item); // Log item data
    console.log("Data point clicked:", index); // Log item data

    setTooltip({
      index: index, // Set the index of the clicked point
      label: item.label,
      value: item.value,
    });
  };

  console.log (tooltip)

  return (
    <View style={styles.container}>
      {tooltip && (
        <View
          style={[styles.tooltip,{
            left: tooltip.index * 50 + 10, 
          },]}
        >
          <Text style={styles.tooltipText}>{tooltip.label}</Text>
          <Text style={styles.tooltipSubText}>Value: {tooltip.value}</Text>
        </View>
      )}

      <LineChart
        data={dataSet.data}
        width={width*0.86}
        height={200}
        adjustToWidth
        hideRules={false}
        thickness={dataSet.thickness}
        hideDataPoint={dataSet.hideDataPoints}
        curved={dataSet.curved}
        color={dataSet.color}
        areaChart={dataSet.areaChart}
        startFillColor={dataSet.startFillColor}
        endFillColor={dataSet.endFillColor}
        startOpacity={dataSet.startOpacity}
        endOpacity={dataSet.endOpacity}
        showArrow={dataSet.showArrow}
        curveType={dataSet.curveType}
        dataPointsRadius={dataSet.dataPointsRadius}
        dataPointsColor={dataSet.dataPointsColor}
        dataPointsShape={dataSet.dataPointsShape}
        onPress={handleDataPointClick}
        initialSpacing={0}
        yAxisColor="transparent"
        xAxisColor="transparent"
        rulesType="solid"
        yAxisTextStyle={{ color: "white", fontSize: 10 }}
        yAxisMin={100}
        yAxisMax={1000}
        xAxisLabelTextStyle={{
          color: "rgba(128, 159, 184, 0.8)",
          fontSize: 8,
          bottom:30,
          // backgroundColor:'red',
          width:30,
          margin:0
        }}
        spacing={56}
        xAxisThickness={0}
        yAxisThickness={0}
        customDot={(item) => {
          return item.label === "14. Sat" ? (
            <View style={styles.selectedDot} />
          ) : null;
        }}
        showScrollIndicator
        scrollIndicatorStyle={{ backgroundColor: "rgb(131, 120, 113)" }}
        rulesColor={"rgba(217, 225, 231, 0.4)"}
        rulesThickness={1}
        noOfSections={5} 
        yAxisLabelTexts={['', '0k', '5k', '10k', '15k', '20k']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    zIndex: 10,
  },
  tooltipText: {
    color: "#fff",
    fontSize: 14,
  },
  tooltipSubText: {
    color: "#888",
    fontSize: 12,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  selectedDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "rgba(242, 111, 16, 1)",
  },
});

export default GiftedChart2;
