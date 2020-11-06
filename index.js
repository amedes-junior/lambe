import React from 'react'
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigator from './src/Navigator'



// import {name as appName} from './app.json'
// import axios from 'axios'
// axios.defaults.baseURL = 'https://lambe-bedee.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

// AppRegistry.registerComponent(appName, () => App)

AppRegistry.registerComponent(appName, () => Redux)

