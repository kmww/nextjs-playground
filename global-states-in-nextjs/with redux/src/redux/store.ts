import { StoreEnhancer, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

const initialState: Record<string, number> = {};

interface ActionType {
  id: string;
  type: 'INCREMENT' | 'DECREMENT';
}

const reducer = (
  state: Record<string, number> = initialState,
  action: ActionType
) => {
  const itemId = action.id;

  switch (action.type) {
    case 'INCREMENT':
      const newItemAmount = itemId in state ? state[itemId] + 1 : 1;
      return {
        ...state,
        [itemId]: newItemAmount,
      };
    case 'DECREMENT':
      if (state?.[itemId] > 0) {
        return {
          ...state,
          [itemId]: state[itemId] - 1,
        };
      }
      return state;
    default:
      return state;
  }
};
