import React from 'react'
import Drawer from './pages/Drawer';
import store from './store/index'
import { Provider } from 'react-redux'
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Drawer />
      </div>
    </Provider>
  );
}

export default App;
