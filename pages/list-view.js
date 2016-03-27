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
import Item from '../components/item/item';

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
    this.getPokemons.bind(this);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.items_row}>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
          </View>
          <View style={styles.items_row}>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
          </View>
          <View style={styles.items_row}>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
          </View>
          <View style={styles.items_row}>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
            <Item showItemAction={this.nextRouteButton.bind(this)}/>
          </View>
        </View>
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
          items.push(data);
        });
      }
    });
    statusUpdating = false;
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
    padding: 5,
    backgroundColor: '#ecf0f1'
  },
  content: {
    flex: 1,
    flexDirection: 'column'
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
  items_row: {
    flexDirection: 'row'
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
