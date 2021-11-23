import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/Main/Main';
import Product from '../pages/Product/Product';
import Items from '../pages/Items/Items';

function AppRouter() {
    return (
        <Routes>
            <Route index path='/' element={<MainPage/>} />
            <Route path='/items' element={<Items />} />
            <Route path='/items/:id' element={<Product/>} />
        </Routes>
    )
}

export default AppRouter;
