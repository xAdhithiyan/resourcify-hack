import AddEmployee from './AddEmployee';
import LoginPage from './LoginPage';
import DashBoard from './Dashboard';
import AssignProject from './AssignProject';
import Analytics from './Analytics';
import Reports from './Reports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const [someState, setSomeState] = useState(initialValue);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/employee" element={<AddEmployee />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/projects" element={<AssignProject />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
