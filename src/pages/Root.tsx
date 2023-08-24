import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div>
        <Navbar />
      </div>
      <main className='flex flex-col overflow-hidden'>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
