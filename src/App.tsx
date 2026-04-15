import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Sponsors from './pages/Sponsors';
import MyTeam from './pages/MyTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="my-team" element={<MyTeam />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
