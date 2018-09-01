import { createStore } from 'redux'

import reducer from './reducer'

const initialState = {
    user: {
        name: 'Tony Stark', //string
        level: 1,           //number
        gender: 'Male',     //string
        register: {},       //object
        login: {},          //object
        token: ''           //string
    },
    message:''              //string
}

const reduxStore = createStore(
    reducer,
    //add redux DevTools extension
    //https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { initialState, reduxStore }
