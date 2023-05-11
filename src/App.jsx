import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Home from './Routes/Home';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
