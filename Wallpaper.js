import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ImageBackground } from 'react-native';
import {StyleSheet, Image} from 'react-native';

import bgSrc from './images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    backgroundColor:'#9FA8DA' ,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
