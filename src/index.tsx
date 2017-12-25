import registerServiceWorker from "./registerServiceWorker";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, Store } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer, { AppState } from "./reducers";
import "./index.css";
import { AddToDoToList } from "./reducers/todos/todos.actions";
import { classMiddleware } from "./reducers/class-to-plain.middleware";

declare const window: any; // tslint:disable-line

// Use redux devtools compose if it is available
const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middleware = [classMiddleware];

const store: Store<AppState> = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

store.dispatch(new AddToDoToList({ todoId: 1, list: 3 }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
