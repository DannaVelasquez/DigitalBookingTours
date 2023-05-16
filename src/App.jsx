import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Home from './Routes/Home';
import Footer from './Components/Footer/Footer';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Detail from './Routes/Detail';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login/>}/>
        <Route path={routes.register} element={<Register/>}/>
        <Route path={routes.tour} element={<Detail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
