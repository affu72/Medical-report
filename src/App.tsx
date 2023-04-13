import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { useMyFormContext } from "./Context/MyFormContext";
import DoctorDetails from "./components/DoctorDetails";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useEffect } from "react";

function App() {
  const { hasDoctorData, setHasDoctorData, isFormOpen, isNavbarOpen } =
    useMyFormContext();

  useEffect(() => {
    const DocData = localStorage.getItem("doctorData");
    if (DocData) setHasDoctorData(true);
  }, [setHasDoctorData]);

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="md:w-fit mx-auto">
        {!hasDoctorData && !localStorage.getItem("doctorData") ? (
          <DoctorDetails />
        ) : (
          <>
            {isFormOpen && <Header />}
            <div
              className={`flex justify-evenly xs:block m-auto md:flex-col ${
                isFormOpen && "mt-16"
              }`}
            >
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
