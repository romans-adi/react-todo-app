import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Todo from './Todo/Todo';
import Navbar from './Navbar/Navbar';
import About from './Pages/About';
import Design from './Pages/Services/Design';
import Development from './Pages/Services/Development';

function App() {
  return (
    <BrowserRouter>
      <>
        <>
          <Navbar />
        </>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path="/design" element={<Design />} />
            <Route path="/development" element={<Development />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
