import React from 'react';
import Sidebar from '../components/Sidebar';
// import Header from './Header';
// import Library from './Library';
// import Recommendations from './Recommendations';
// import Discover from './Discover';
// import Downloads from './Downloads';
// import AccountSettings from './AccountSettings';
// import Footer from './Footer';

const UserPage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        {/* <Header /> */}
        {/* Default view can be My Library or based on user choice */}
        {/* <Library />  */}
        {/* Other components can be routed based on user action */}
        {/* <Recommendations /> */}
        {/* <Discover /> */}
        {/* <Downloads /> */}
        {/* <AccountSettings /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default UserPage;