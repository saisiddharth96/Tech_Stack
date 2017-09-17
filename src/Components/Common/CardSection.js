import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={Style.containerStyle}>{props.children}</View>;
};

const Style = {
  containerStyle: {
    borderBottomWidth: 1,
    height: 40,
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  }
};

export default CardSection;
