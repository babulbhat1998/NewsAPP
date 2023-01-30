import React, { Component } from 'react'
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
        <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height='4px'
          />
        <Routes>
          <Route path="/" element={<News apikey={this.apikey} changrProgress={this.setProgress}  pagesize={5} key="general" category='general' />}></Route>
          <Route path="/business" element={<News apikey={this.apikey} changrProgress={this.setProgress}  pagesize={5} key="business" category='business' />}></Route>
          <Route path="/entertainment" element={<News apikey={this.apikey} changrProgress={this.setProgress}  pagesize={5} key="entertainment" category='entertainment' />}></Route>
          <Route path="/general" element={<News apikey={this.apikey} changrProgress={this.setProgress}  pagesize={5} key="general" category='general' />}></Route>
          <Route path="/health" element={<News apikey={this.apikey} changrProgress={this.setProgress}  pagesize={5} key="health" category='health' />}></Route>
          <Route path="/science" element={<News apikey={this.apikey} changrProgress={this.setProgress}  pagesize={5} key="science" category='science' />}></Route>
          <Route path="/sports" element={<News apikey={this.apikey} changrProgress={this.setProgress}  pagesize={5} key="sports" category='sports' />}></Route>
          <Route path="/technology" element={<News apikey={this.apikey} changrProgress={this.setProgress}  pagesize={5} key="technology" category='technology' />}></Route>

        </Routes>
      </Router>
    )
  }
}

