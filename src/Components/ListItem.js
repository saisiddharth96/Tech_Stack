import React, { Component } from "react";
import { Text, 
  NativeModules,
  TouchableWithoutFeedback,
   View,
  LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import CardSection from "./Common/CardSection";
import * as actions from "../actions";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { titleStyling, textStyling } = Styles;
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <View>
          <Text style={textStyling}>{library.description}</Text>
        </View>
      );
    }
  }

  render() {
    const { titleStyling, textStyling } = Styles;
    const { id, title } = this.props.library;

    return (
    
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View style={{ overflow : 'hidden' }}>
            <CardSection>
              <Text style={titleStyling}>{title}</Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
      
    );
  }
}

const Styles = {
  titleStyling: {
    flex: 1,
    fontSize: 18,
    color: "#F4FBFF",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingTop: 3,
    backgroundColor: "#0D5B8F"
  },
  textStyling: {
    fontSize: 16,
    color: "#061D32",
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#E4F2FF",
    padding: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
