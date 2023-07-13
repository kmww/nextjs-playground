import { useMemo } from 'react';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

interface ActionType {
  id: string;
  type: 'INCREMENT' | 'DECREMENT';
}

let store: Store<Record<string, number>, ActionType> | undefined;

const initialState: Record<string, number> = {};

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

const initStore = (
  preloadedState = initialState
): Store<Record<string, number>, ActionType> => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};

export const initializeStore = (
  preloadedState: Record<string, number> | undefined
) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export const useStore = (
  initialState: any
): Store<Record<string, number>, ActionType> => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
