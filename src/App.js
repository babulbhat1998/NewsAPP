import React, {useState} from 'react'
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0)
  return (
    <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height='4px'
      />
      <Routes>
        <Route path="/" element={<News apikey={apikey} changrProgress={setprogress} pagesize={5} key="general" category='general' />}></Route>
        <Route path="/business" element={<News apikey={apikey} changrProgress={setprogress} pagesize={5} key="business" category='business' />}></Route>
        <Route path="/entertainment" element={<News apikey={apikey} changrProgress={setprogress} pagesize={5} key="entertainment" category='entertainment' />}></Route>
        <Route path="/general" element={<News apikey={apikey} changrProgress={setprogress} pagesize={5} key="general" category='general' />}></Route>
        <Route path="/health" element={<News apikey={apikey} changrProgress={setprogress} pagesize={5} key="health" category='health' />}></Route>
        <Route path="/science" element={<News apikey={apikey} changrProgress={setprogress} pagesize={5} key="science" category='science' />}></Route>
        <Route path="/sports" element={<News apikey={apikey} changrProgress={setprogress} pagesize={5} key="sports" category='sports' />}></Route>
        <Route path="/technology" element={<News apikey={apikey} changrProgress={setprogress} pagesize={5} key="technology" category='technology' />}></Route>

      </Routes>
    </Router>
  )
}

export default App;
