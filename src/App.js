import {Provider} from 'react-redux'
import store from './store/index'
import "antd/dist/antd.css";

import Header from './Components/Header/Header'
import PersonInfo from './Components/PersonInfo/PersonInfo'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <PersonInfo/>
    </div>
    </Provider>
  );
}

export default App;
