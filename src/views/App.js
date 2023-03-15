import logo from './logo.svg';
import './App.css';

//components
import ParentComponent from './Exp/ParentComponent';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Insoc
        </p>
      <ParentComponent />

      </header>
    </div>
  );
}

export default App;
