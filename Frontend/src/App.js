import React from 'react'
import './styles/global.css'
import Routes from './routes'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
      <Provider store={store}>
        <Routes/>
        <ToastContainer />
      </Provider>
  );
}

export default App;
