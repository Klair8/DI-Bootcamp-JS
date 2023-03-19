import Landing from './components/Landing';
import './App.css';
import Movie from './components/Movie';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/MovieDetails" element={<Movie />} />
    </Routes>
   
    </div>
        </BrowserRouter>
  );
}

export default App;
