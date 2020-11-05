import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';


// import { Provider } from 'react-redux'
// import App from './src/App'

// import Feed from './src/screens/Feed'

import Navigator from './src/Navigator'



// import {name as appName} from './app.json'

// import storeConfig from './src/store/storeConfig'

// import axios from 'axios'
// axios.defaults.baseURL = 'https://lambe-bedee.firebaseio.com/'

// const store = storeConfig()
// const Redux = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

// AppRegistry.registerComponent(appName, () => App)

AppRegistry.registerComponent(appName, () => Navigator)

