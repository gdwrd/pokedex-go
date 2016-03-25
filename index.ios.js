import React, {
  AppRegistry,
} from 'react-native';

import App from './components/app';

class pokedex extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('pokedex', () => pokedex);
