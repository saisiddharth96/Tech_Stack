import React , {Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import CardSection from './Common/CardSection';

 class ListItem extends Component {
   render(){
     const {titleStyling} = Styles;
     return(
         <CardSection>
            <Text style = {titleStyling}>{this.props.library.title}</Text>
         </CardSection>
     );
   }
 }

const Styles = {
  titleStyling : {
    fontSize : 18,
    color : "#061D32",
    paddingLeft : 30
  }
};
 export default ListItem;
