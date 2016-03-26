import React, {
  AsyncStorage,
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

import ItemView from './item-view';
import api from '../components/api/api';

let statusUpdating = false;

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOffset: 0,
      toRoute: props.toRoute
    }
  }

  nextRouteButton() {
    this.state.toRoute({
      name: 'Pokémon View',
      component: ItemView
    })
  }

  componentWillMount() {
    this.getPokemons();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Hello form Main Component</Text>
        <Button onPress={this.getPokemons.bind(this)}>
          <View style={styles.button}>
            <Icon name="refresh" size={18} color="#ecf0f1" />
            <Text style={styles.buttonText}>LOAD MORE</Text>
          </View>
        </Button>
      </View>
    );
  }

  getPokemons() {
    statusUpdating = true;
    const API_LINK = 'http://pokeapi.co/api/v2/pokemon/?limit=12';
    let items = [];

    api(API_LINK).then((data) => {
      for (let item of data.results) {
        api(item.url).then((data) => {
          console.log(data);
        });
      }
    });
  }

  updateItemsDB(items) {
    AsyncStorage.setItem('items', JSON.stringify(items));
  }

  updateItemsState(items) {
    this.state = {
      items: items
    };
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
    backgroundColor: '#1abc9c',
    borderColor: '#16a085',
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: 0.7,
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
