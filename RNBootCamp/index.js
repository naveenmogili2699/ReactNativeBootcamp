/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store } from './src/ReduxToolKit/store';
import { Provider } from 'react-redux';

const ReduxExample = ()=>{
    <Provider store={store}>
        <App/>
    </Provider>
}
AppRegistry.registerComponent(appName, () => App);
