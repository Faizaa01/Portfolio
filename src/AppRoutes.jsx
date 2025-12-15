import { Route, Routes } from 'react-router';
import Main from './components/Layout/Main';
import ProjectDetails from './components/ProjectDetails';

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
    );
};

export default AppRoute;