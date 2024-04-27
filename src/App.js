import './App.css';
import Counter from './Components/Counter';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Error from './Components/Error';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/counter' element={<Counter/>}/>
              <Route exact path='/contact-us' element={<Contact/>}/>
              
              <Route exact path='*' element={<Error/>}/>
        
          </Routes>
      </Router>
    </>
  );
}

export default App;
