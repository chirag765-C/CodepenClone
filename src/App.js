import logo from './logo.svg';
import './App.css';
import Home from "./componenets/Home";
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div className="App">
   <DataProvider>
     <Home />
     </DataProvider>
    </div>
  );
}

export default App;
