import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    console.log(data)
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);


  return (
    <div>
      <Header />
      <Home />
      <About />
      {/* <Contact /> */}
    
    </div>
  );
}

export default App;
