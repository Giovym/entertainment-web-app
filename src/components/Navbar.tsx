import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../public/assets/logo.svg';
import { ReactComponent as IconNavHome } from '../../public/assets/icon-nav-home.svg';
import { ReactComponent as IconNavMovies } from '../../public/assets/icon-nav-movies.svg';
import { ReactComponent as IconNavTvSeries } from '../../public/assets/icon-nav-tv-series.svg';
import { ReactComponent as IconNavBookmark } from '../../public/assets/icon-nav-bookmark.svg';

import ImageAvatar from '../../public/assets/image-avatar.png';

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex h-14  md:flex-col items-center justify-between mb-6 mx-0 w-screen bg-semi-dark-blue sm:rounded-2xl  sm:w-11/12 sm:m-6 sm:h-16 md:w-24 md:h-164'>
      <div className='ml-6 md:ml-0 md:mt-9'>
        <Logo />
      </div>

      <div className='flex md:flex-col gap-10 md:mx-0 md:pt-18'>
        <div className=''>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <IconNavHome />
          </NavLink>
        </div>

        <div>
          <NavLink
            to='/movies'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <IconNavMovies />
          </NavLink>
        </div>

        <div>
          <NavLink
            to='/tvseries'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <IconNavTvSeries />
          </NavLink>
        </div>

        <div>
          <NavLink
            to='/favorites'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <IconNavBookmark />
          </NavLink>
        </div>
      </div>

      <div className=' mr-4 md:mt-auto md:mr-0 md:ml-0 md:mb-8'>
        <img
          className='w-10 h-10 rounded-full border border-white '
          src={ImageAvatar}
          alt='image-avatar'
        />
      </div>
    </nav>
  );
};

export default Navbar;
