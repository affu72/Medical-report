import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { useMyFormContext } from "./Context/MyFormContext";
import DoctorDetails from "./components/DoctorDetails";
import Header from "./components/Header";

function App() {
  const { hasDoctorData, isFormOpen, isNavbarOpen } = useMyFormContext();

  return (
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
  );
}

export default App;
