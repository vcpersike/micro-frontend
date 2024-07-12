
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import React from "react";

const Button = React.lazy(() => import('microFront01/Button'));
const ReactLogo = React.lazy(() => import('microFront01/ReactLogo'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Button />,
    children: [ {
      index: true,
      element: (
        <div>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Button />
            <ReactLogo />
          </React.Suspense>
        </div>
      ),
    },],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
