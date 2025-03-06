import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { AnalyticsWithJS } from './pages/AnalyticsWithJS';
import { AnalyticsWithEdgee } from './pages/AnalyticsWithEdgee';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics-with-js" element={<AnalyticsWithJS />} />
          <Route path="/analytics-with-edgee" element={<AnalyticsWithEdgee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
