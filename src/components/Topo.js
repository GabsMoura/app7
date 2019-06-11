import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

const logo = require('../img/jokenpo.png')
const estilo = StyleSheet.create({
    img:{
        alignSelf:'center',
        marginTop:10,
    }
});

export default class Logo extends Component {
  render() {
    return (
      <View style={estilo.img}>
        <Image source={logo}/>
      </View>
    );
  }
}
