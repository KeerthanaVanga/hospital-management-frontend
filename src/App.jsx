import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import Layout from "./pages/Layout";
import { checkAuthLoader } from "./utils/checkAuth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "doctors", element: <Doctors /> },
      { path: "doctors/:speciality", element: <Doctors /> },
      { path: "login", element: <Login /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "my-profile", element: <MyProfile />, loader: checkAuthLoader },
      {
        path: "my-appointments",
        element: <MyAppointments />,
        loader: checkAuthLoader,
      },
      {
        path: "appointment/:docId",
        element: <Appointment />,
        loader: checkAuthLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
