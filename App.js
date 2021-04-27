import Front from './front'
import './App.css';


function App(props) {
  return (
    <div className="App">
  {props.children}
    <Front />  
    </div>
  );
}

export default App;
