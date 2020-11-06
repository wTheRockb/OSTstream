import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { OstStreamAction, OstStreamState } from './types/Index';
import { currentlyPlayingInitialState, CurrentlyPlayingReducer } from './components/CurrentlyPlaying/ducks/reducers';



const reducers = combineReducers<OstStreamState, OstStreamAction>({
  currentlyPlayingState: CurrentlyPlayingReducer,
})

const initialStoreState: OstStreamState = {
  currentlyPlayingState: currentlyPlayingInitialState,
}

const store = createStore<OstStreamState, OstStreamAction, {}, {}>(
  reducers,
  initialStoreState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
