import React, { RefObject } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export interface DatapointInfo {
  value: any;
  time: any;
}

interface ScrollableViewLabelProps {
  ref: RefObject<ScrollableDotView>;
}

interface ScrollableViewLabelState {
  dataPoint: DatapointInfo | undefined;
  scrollPositionX: number;
  scrollPositionY: number;
}

export abstract class ScrollableDotView extends React.Component<
  ScrollableViewLabelProps,
  ScrollableViewLabelState
> {
  state = {
    dataPoint: undefined,
    scrollPositionX: 0,
    scrollPositionY: 0
  };

  constructor(props) {
    super(props);
  }
}

export class ScrollableViewClassDefault extends ScrollableDotView {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textStyle}>
          {this.state.dataPoint
            ? `${this.state.dataPoint.time} - ${this.state.dataPoint.value}`
            : "TEST"}
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#121212",
    borderRadius: 2,
    width: 250,
    height: 30
  },
  textStyle: {
    color: "#C4C4C4",
    marginHorizontal: 4,
    flex: 1,
    textAlign: "center"
  }
});
