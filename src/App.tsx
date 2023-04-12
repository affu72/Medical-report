import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { useMyFormContext } from "./Context/MyFormContext";
import DoctorDetails from "./components/DoctorDetails";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

function App() {
  const { hasDoctorData, isFormOpen, isNavbarOpen } = useMyFormContext();

  return (
    <>
      <ToastContainer />
      <div className="md:w-fit mx-auto">
        {!hasDoctorData && !localStorage.getItem("doctorData") ? (
          <DoctorDetails />
        ) : (
          <>
            {isFormOpen && <Header />}
            <div className={`flex justify-evenly xs:block m-auto md:flex-col`}>
              <MainPage></MainPage>
              <PreviewPage></PreviewPage>
            </div>
          </>
        )}
        {isNavbarOpen && <div className="overlay"></div>}
      </div>
    </>
  );
}

export default App;
