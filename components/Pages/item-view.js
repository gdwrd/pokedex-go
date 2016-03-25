import React, {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class ItemView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from ItemView Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

module.exports = ItemView;
