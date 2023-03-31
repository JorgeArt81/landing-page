import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import { HouseList } from '../pages/HouseList.jsx';
import { Demo } from '../pages/Demo.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'demo',
        element: <Demo />,
      },
      {
        path: '/',
        element: <HouseList />,
      },
      {
        path: '/*',
        element: <HouseList />,
      },
    ],
  },
]);
