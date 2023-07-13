import { combineReducers } from 'redux';
import { reducer as items } from '@/redux/store';

const rootReducer = combineReducers({
  items,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
