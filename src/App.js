import './App.css';

//redux imports
import CakeContainer from './conmponents/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HookCakeContainer from './conmponents/HooksCakeContainer';
import IceCreamContainer from './conmponents/IceCreamContainer';
import NewCakeContainer from './conmponents/NewCakeContainer';
import ItemContainer from './conmponents/ItemContainer';


function App() {
  return (
    //el provider necesita ser cargado con un store con esto se comunica con toda la aplicacion al encapsularla en el provider
    <Provider store= {store}>
      <div className="App">
        <ItemContainer/>
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
