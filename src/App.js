import React, {memo} from 'react';
import {Routes, Route} from 'react-router-dom';

import MenuLink from './components/MenuLink';
import Home from './pages';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

const App = memo(() => {
  return (
    <>
      <MenuLink />

      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
});

export default App;