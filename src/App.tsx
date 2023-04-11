import PreviewPage from "./components/PreveiwComponent/PreviewPage";
import MainPage from "./components/MainComponent/MainPage";
import { useMyFormContext } from "./Context/MyFormContext";
import DoctorDetails from "./components/DoctorDetails";
import Header from "./components/Header";

function App() {
  const { hasDoctorData, isFormOpen, isOpen } = useMyFormContext();

  return (
    <div className="h-full overflow-hidden">
      {!hasDoctorData && !localStorage.getItem("doctorData") ? (
        <DoctorDetails />
      ) : (
        <>
          {isFormOpen && <Header />}
          <div
            className={`flex justify-evenly xs:block m-auto md:flex-col ${
              isFormOpen ? "mt-20" : ""
            }`}
          >
            <MainPage></MainPage>
            <PreviewPage></PreviewPage>
          </div>
        </>
      )}
      {isOpen && <div className="overlay"></div>}
    </div>
  );
}

export default App;
