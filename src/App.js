import { Route, Routes } from 'react-router-dom';
import './App.css';
import data from './components/back/data/Data';
import Header from './components/front/Header/Header';

function App() {
    const { productItems } = data;
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<div>hello</div>} />
            </Routes>
        </div>
    );
}

export default App;
