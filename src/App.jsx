import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import DateBasePage from './page/dataBase';
import ArquitecturaPage from './page/arquitecturaDeComp';
import ProgramacionPage from './page/programacion';
import RedesPage from './page/redes';
import SistemasOPage from './page/sistemasOperativos';
import HomePage from './page/homePage';
import AboutMe from './page/aboutMe';





function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/arquitecDComp" element={<ArquitecturaPage />} />
          <Route path="/sistemasOp" element={<SistemasOPage />} />
          <Route path="/dataBase" element={<DateBasePage />} />
          <Route path="/programacion" element={<ProgramacionPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/redes" element={<RedesPage />}/>
          <Route path="/aboutMe" element={<AboutMe />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;