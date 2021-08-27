import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NetflixNavbar from './components/Navbar';
import GetMovies from './components/GetMovies';

function App() {
  return (
    <div className="App">
      <NetflixNavbar />
      <GetMovies search='marvel'/>
      <GetMovies search='harry%20potter'/>
      <GetMovies search='lord%20of%20the%20rings'/>
    </div>
  );
}

export default App;
