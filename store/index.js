import {createStore, compose} from 'redux';
import reducers from '../src/reducers';
import {persistStore, autoRehydrate} from 'redux-persist';
import AsyncStorage from "react-native";
const store = createStore(
    reducers, {}, compose(autoRehydrate())
)

persistStore(store, {storage: AsyncStorage, noteList: ["tasks"]})

export default store;