import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";
import Donar from "./pages/Dashborad/Donar";
import Hospitals from "./pages/Dashborad/Hospitals";
import Organisation from "./pages/Dashborad/Organisation";
import Consumer from "./pages/Dashborad/Consumer";
import Donation from "./pages/Donation";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Homepage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/organisation"
          element={
            <ProtectedRoutes>
              <Organisation />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoutes>
              <Hospitals />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoutes>
              <Consumer />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoutes>
              <Donation />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donar"
          element={
            <ProtectedRoutes>
              <Donar />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/Register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
