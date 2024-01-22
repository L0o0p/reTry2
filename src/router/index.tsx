import { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../Views/Login';
import HeadNav from '../Views/HeadNav';
import SignUp from '../Views/SignUp';

export default class Index extends Component {
  render() {
    return (
      <Router>
        <HeadNav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/log" element={<Login />} />
          <Route path="/sig" element={<SignUp />} />
        </Routes>
      </Router>
    );
  }
}