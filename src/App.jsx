import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import WeatherForm from './Components/WeatherForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
          <WeatherForm />
      </header>
    </div>
  );
}

export default App;
