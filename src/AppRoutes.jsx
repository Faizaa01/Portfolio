import { Route, Routes } from 'react-router';
import Main from './components/Layout/Main';
import About from './components/About';

const AppRoute = () => {
    return (
        <Routes>
            <Route path="" element={<Main />} />
        </Routes>
    );
};

export default AppRoute;