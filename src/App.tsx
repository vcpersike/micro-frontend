
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Button from "microFront01/Button";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Button />,
    children: [],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
