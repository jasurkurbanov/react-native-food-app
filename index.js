import {AppRegistry} from 'react-native';
// import Main from './Main';
import Main from './src/AppNavigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
