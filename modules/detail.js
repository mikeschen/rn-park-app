import React from 'react';
import {Text, View, ImageBackground, StyleSheet } from 'react-native';
import Hyperlink from 'react-native-hyperlink'

export default class Detail extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.name.stringValue,
    };
  };

  render() {
    const {
      remarks,
      acres,
      elevation,
      county,
      established,
      image_url,
      url
    } = this.props.navigation.state.params;
    const background = image_url.stringValue;
    return (
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        source={{uri: background}}
      >
        <View style={styles.content}>
          <View style={styles.overlay}>
            <Text style={styles.paddings}>{remarks.stringValue}</Text>
            <Text style={styles.paddings}>Acres: {isNaN(acres.stringValue) ? acres.stringValue : parseInt(acres.stringValue).toLocaleString('en')}</Text>
            <Text style={styles.paddings}>Elevation: {isNaN(elevation.stringValue) ? elevation.stringValue : parseInt(elevation.stringValue).toLocaleString('en')}</Text>
            <Text style={styles.paddings}>County: {county.stringValue}</Text>
            <Text style={styles.paddings}>Established: {established.stringValue}</Text>
            <Text style={styles.paddings}>More info:
              <Hyperlink linkDefault={ true }>
                <Text style={{color: 'blue'}}> {url.stringValue}</Text>
              </Hyperlink>
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles= StyleSheet.create({
  overlay: {
    flex: 1,
    opacity: 0.7,
    backgroundColor: 'white',
    padding: '5%',
  },
  paddings: {
    padding: '3%',
  },
  content:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
})