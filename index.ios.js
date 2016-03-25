import React, {
  AppRegistry,
  StyleSheet
} from 'react-native';

import Router from 'react-native-simple-router';
import backButton from './components/backButton/backButton';
import ListView from './pages/list-view';

const firstRoute = {
  name: 'Pokédex!',
  component: ListView,
};

const statusBarProps = {
  backgroundColor: '#16a085',
};

class pokedex extends React.Component {
  render() {
    return(
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.navbar}
        backButtonComponent={backButton}
        statusBarProps={statusBarProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#1abc9c',
    borderBottomColor: '#16a085',
    borderBottomWidth: 3
  }
});

AppRegistry.registerComponent('pokedex', () => pokedex);
