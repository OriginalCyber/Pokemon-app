import "./styles/global.css"
// import DefaultLayout from '../src/components/layout/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/Content/home/HomePage';
import SearchPage from '../src/components/Content/search/SearchPage';

function App() {
  return (
    
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="SearchPage" element={<SearchPage />} />
            </Routes>


  )
}

export default App;
