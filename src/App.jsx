import SideBar from "./components/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import EditProfile from "./pages/editProfile";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import PatientsList from "./pages/patientsList";
import PatientsListFamily from "./pages/patientsListFamily";

import ClinicalHistory from "./pages/clinicalHistory";
import VitalsSignals from "./pages/vitalsSignals";
import SendEmail from "./pages/sendEmail";
import Home from "./pages/home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useGlobalState } from "./store/GlobalState";

function App() {
  const isAuth = useGlobalState((state) => state.isAuth);

  return (
    <div className="font-['Poppins'] flex h-full">
      <SideBar />
      <main className="lg:w-10/12 w-full ml-auto">
        <Routes>
          <Route element={<ProtectedRoute isAllowed={isAuth} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/patients-list" element={<PatientsList />} />
            <Route
              path="/patients-list-family"
              element={<PatientsListFamily />}
            />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/clinical-history" element={<ClinicalHistory />} />
            <Route path="/signals-vitals" element={<VitalsSignals />} />
          </Route>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
