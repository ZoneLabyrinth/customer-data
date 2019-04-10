
import {createStore} from 'redux'
import { customer } from './reducers';

const store = createStore(customer)

export default store

