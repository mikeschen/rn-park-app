import React from 'react';
import {View} from 'react-native';

import {FeedStack} from "./modules/router";

export default class App extends React.Component {

  render() {
    return (
        <View style={{flex: 1}}>
          <FeedStack/>
        </View>
    )
  }
}
