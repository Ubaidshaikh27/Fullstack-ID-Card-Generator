import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import IdCard from './Index';
import EmployeeTable from './Table';


function App() {
    return (
        <div>
        <Router>
            <Routes>
            <Route index element={<IdCard />} />
                <Route path="/" element={<IdCard />} />
                <Route path="/table" element={<EmployeeTable />} />
            </Routes>
        </Router>
        </div>
    );
}





export default App;