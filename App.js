import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLabel,
} from "victory-native";

const Flyout = (props) => {
  // console.log("props", props);
  return (
    <View
      style={{
        position: "absolute",
        left: props.x,
        top: 50,
        height: 250,
        width: 1,
        backgroundColor: "red",
        zIndex: 5,
      }}
    ></View>
  );
};

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart
          theme={VictoryTheme.material}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => [datum.x, datum.y]}
              labelComponent={
                <VictoryTooltip
                  activateData
                  center={{ x: 30, y: 20 }}
                  flyoutComponent={<Flyout />}
                  labelComponent={
                    <VictoryLabel
                      style={[{ fill: "red", fontSize: 25 }]}
                      backgroundStyle={{ fill: "white" }}
                    />
                  }
                />
              }
            />
          }
        >
          <VictoryLabel dx={20} dy={20} text="test" />
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" },
            }}
            data={data}
          />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
