import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from "react-native-elements";
import axios from "axios";

export default class Park extends React.Component {
  state = {
    places: []
  }

  componentDidMount() {
    axios.get('https://firestore.googleapis.com/v1beta1/projects/rn-code-challenge/databases/(default)/documents/parks')
      .then(res => {
        const places = res.data.documents;
        this.setState({places})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLearnMore = (park) => {
    this.props.navigation.push('Detail', {...park});
  };

  render() {
    return (
      <FlatList
        data={this.state.places.sort((a, b) => a.fields.name.stringValue.localeCompare(b.fields.name.stringValue))}
        style={{backgroundColor: '#FFFFFF'}}
        keyExtractor={item=> item.createTime}
        renderItem={({item}) => (
            <ListItem
              avatar={{uri: item.fields.image_url.stringValue}}
              title={item.fields.name.stringValue}
              hideChevron={true}
              onPress={() => this.onLearnMore(item.fields)}
            />
        )}
      />
    )
  }
}