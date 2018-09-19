import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Park from './park';
import Detail from './detail'

export const FeedStack = createStackNavigator({
  Park: {
    screen: Park,
    navigationOptions: {
      title: 'Arizona State Parks',
      headerStyle: {
        backgroundColor: '#8c1d40',
      },
      headerTintColor: '#ffc627'
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#8c1d40',
      },
      headerTintColor: '#ffc627'
    }
  },
});