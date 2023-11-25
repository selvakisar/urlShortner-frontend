import './App.css';
import { Route, Routes } from 'react-router';
import Login from './users/Login';
import Signup from './users/SignUp';
import Forget from './users/Forget';
import Reset from './users/Reset';
import { Home } from './components/Home';
import { AllUrl } from './url/allUrl';
import ShortUrlForm from './url/short Ur';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route  path='/' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/forget' element={<Forget/>}/>
          <Route  path='/reset' element={<Reset/>}/>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/all' element={<AllUrl/>}/>
          <Route  path='/short' element={<ShortUrlForm/>}/>
          

        </Routes>
    </div>
  );
}

export default App;
