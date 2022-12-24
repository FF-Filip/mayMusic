import React from 'react';
import ReactDOM from 'react-dom/client';
import Backend from './Sites/Backend-demo';
import App from './Components/App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
