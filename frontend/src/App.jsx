import AddEmployee from './AddEmployee';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const [someState, setSomeState] = useState(initialValue);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
