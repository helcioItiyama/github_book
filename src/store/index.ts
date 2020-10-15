import { createStore, Store } from 'redux';
import rootReducer from './modules/rootReducer';
import { DevState, RepoState } from './modules/types';

export interface ApplicationState {
  devReducer: DevState;
  repoReducer: RepoState;
}

function saveToLocalStorage(state: ApplicationState): void {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage(): ApplicationState | undefined {
  const serializedState = localStorage.getItem('state');
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
}

const persistedState = loadFromLocalStorage();
const store: Store<ApplicationState> = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
