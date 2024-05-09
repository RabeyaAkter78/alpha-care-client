import { Outlet } from 'react-router-dom';
// import EmergencyNav from '../../Pages/Shared/Navbar/EmergencyNav';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            {/* <EmergencyNav></EmergencyNav> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;