import NavBar from "./components/NavBar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer
        greeting="Lo último en tecnología"
      />
    </div>
  );
}


export default App;
 