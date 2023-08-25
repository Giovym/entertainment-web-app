import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ApiProvider } from './context/ApiContext';
import { SearchBarProvider } from './context/SearchBarContext';

import Root from './pages/Root';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Favorites from './pages/Favorites';
import Error from './pages/Error';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: '/movies', element: <Movies /> },
        { path: '/tvseries', element: <TvSeries /> },
        { path: '/favorites', element: <Favorites /> },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? '/' : '/entertainment-web-app/' }
);

const App = () => {
  return (
    <ApiProvider>
      <SearchBarProvider>
        <RouterProvider router={router} />
      </SearchBarProvider>
    </ApiProvider>
  );
};

export default App;
