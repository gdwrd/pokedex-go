import React, {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ItemView from './item-view';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toRoute: props.toRoute
    }
  }

  nextRouteButton() {
    this.state.toRoute({
      name: 'Pokémon View',
      component: ItemView
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Hello form Main Component</Text>
        <Button onPress={this.nextRouteButton.bind(this)}>
          <View style={styles.button}>
            <Icon name="refresh" size={16} color="#ecf0f1" />
            <Text style={styles.buttonText}>LOAD MORE</Text>
          </View>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ecf0f1'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#16a085',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 20,
    paddingRight: 20
  }
});

module.exports = ListView;
