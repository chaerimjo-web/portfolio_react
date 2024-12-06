import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router";
//Router, Routes, Route  별칭, 경로들, 경로
import  data  from './data.json';
import Details from './pages/Portfolio_details';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data}/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/portfolio" element={<Portfolio data={data}/>} /> 
        <Route path="/portfolio/:id" element={<Details data={data}/>} /> 
      </Routes>
    </Router>
  );
}
//element 연결될 경로 | | data->data.json 
export default App;
