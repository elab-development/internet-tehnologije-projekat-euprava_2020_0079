import logo from './logo.svg';
import './App.css';
import PocetnaStranica from './components/home/Pocetna';
import Usluge from './components/usluge/Usluge';

function App() {
  return (
    <div className="App">
      <PocetnaStranica></PocetnaStranica>
      <Usluge></Usluge>
    </div>
  );
}

export default App;
