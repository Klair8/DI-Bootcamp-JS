import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>Redux Movies</h1>
    <MovieList />
    <MovieDetails/>
    </div>
  );
}

export default App;
