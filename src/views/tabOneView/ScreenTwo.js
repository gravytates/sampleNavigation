'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import getTitle from '../../selectors/title';
import { staticStyles, dynamicStyles } from '../../styles';


export default class TabOneScreenTwo extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab One Screen Two' }</Text>
          <Text style={dynamicStyles.getTitle('white')}>{this.props.title}</Text>

        <TouchableOpacity
          onPress={ () => this.props.fetchTitle() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>

          <Text>{'Fetch a title'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'purple',
            marginTop:20
          }}>
          <Text>{'Go back a screen'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

TabOneScreenTwo.defaultProps = {
  fetchTitle: () => {},
  title: '',
};

TabOneScreenTwo.propTypes = {
  fetchTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
