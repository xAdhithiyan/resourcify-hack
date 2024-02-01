import AddEmployee from './AddEmployee';
import LoginPage from './LoginPage';
import DashBoard from './Dashboard';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
