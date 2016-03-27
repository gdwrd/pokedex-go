import React, {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showItemAction: props.showItemAction
    }
  }

  render() {
    return(
      <TouchableHighlight onPress={this.state.showItemAction}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={styles.content}>
            <Text style={styles.name}>Guantorosaur</Text>
            <View style={styles.tags}>

            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 111,
    height: 125,
    backgroundColor: '#1abc9c',
    borderBottomColor: '#16a085',
    borderBottomWidth: 2,
    borderRadius: 4,
    margin: 5
  },
  content: {
    flex: 1
  },
  image: {
    flex: 2,
    borderRadius: 4,
  },
  name: {
    color: '#ecf0f1',
    flex: 1,
    textAlign: 'center',
  },
  tags: {
    flex: 1
  }
})

module.exports = Item;
