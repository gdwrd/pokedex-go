import React, {
  AppRegistry,
  StyleSheet
} from 'react-native';

import Router from 'react-native-simple-router';
import backButton from './backButton/backButton';
import ListView from './Pages/list-view';

const firstRoute = {
  name: 'Pokédex!',
  component: ListView,
};

class App extends React.Component {
  render() {
    return(
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.navbar}
        backButtonComponent={backButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#16a085'
  }
});

module.exports = App;
