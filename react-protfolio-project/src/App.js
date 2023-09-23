import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout  from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Project1 from './components/Projects/Project-1';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project-1' element={<Project1/>}/>
      </Route>
    </Routes>
  </>
  )
}

export default App;
