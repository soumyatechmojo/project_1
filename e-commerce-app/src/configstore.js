import { configureStore } from '@reduxjs/toolkit';
import reducers from './Reducers'

export default configureStore ({
    reducer: reducers
})