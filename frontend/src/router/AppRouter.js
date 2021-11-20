import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage';
import Product from '../pages/Product/Product';

function AppRouter() {
    return (
        <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route path='/product/:id' element={<Product/>} />
        </Routes>
    )
}

export default AppRouter;
