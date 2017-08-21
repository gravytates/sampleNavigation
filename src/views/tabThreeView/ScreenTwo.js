'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TabThreeScreenTwo extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Three Screen Two' }</Text>
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
        <TouchableOpacity
          onPress={
            () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} })
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'deeppink',
            marginTop:20
          }}>
          <Text>{'jump to tab one'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
