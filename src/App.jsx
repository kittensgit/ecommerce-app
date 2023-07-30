import { Route, Routes } from 'react-router-dom';
import './App.css';
import data from './components/back/data/Data';
import Header from './components/front/Header/Header';
import Products from './components/front/Products/Products';

function App() {
    const { productItems } = data;
    return (
        <div>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Products productItems={productItems} />}
                />
            </Routes>
        </div>
    );
}

export default App;
