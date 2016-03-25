import React, {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class backButton extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Icon name="chevron-left" size={16} color="#fff" />
        <Text style={styles.button}>Back</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flexDirection: 'row',
    padding: 7
  },
  button: {
    color: '#ecf0f1',
    fontSize: 16,
    paddingLeft: 5
  }
});

module.exports = backButton;
