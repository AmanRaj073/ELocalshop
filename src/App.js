import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login";
import Footer from "./Components/Pages/Common/Footer";
import Header from "./Components/Pages/Common/Header";
import Signup from "./Components/Pages/Signup";
import Search from "./Components/Pages/Search";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfileDasboard from "./Components/Pages/EditPage/ProfileDashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Token } from "./Components/Redux/AuthSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  //check token avable or not
  function PrivateRoute({ children }) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (<Navigate to="/login" />);
   
  }

  const publicRouter = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ];

  const privateRouter = [
    { path: "/search", element: <Search /> },
    { path: "/editprofile", element: <ProfileDasboard /> },
  ];

  useEffect(() => {
    dispatch(Token());
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header />
      <Routes>
        {/*----- Public Route----- */}

        {publicRouter?.map((route, index) => {
          return (
            <Route
              key={index + 1}
              exact
              path={route?.path}
              element={route?.element}
            />
          );
        })}

        {/*----- Private Route----- */}
        {privateRouter?.map((route,index) => {
          return (
            <Route
            key={index + 10}
              path={route.path}
              element={<PrivateRoute>{route?.element}</PrivateRoute>}
            />
          );
        })}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
