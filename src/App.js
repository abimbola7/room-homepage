import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero/hero"
import About from "./components/About/about"
import MainHeader from './components/MainHeader/mainheader';

function App() {
  return (
    <Fragment>
      <MainHeader/>
      <Hero/>
      <About/>
    </Fragment>
  );
}

export default App;
