import "./App.css";
import Navbar from "./Navbars";
import Sidebar from "./SideBar";
import MainSection from "./Main";
import Section from "./Section";
import Report from "./Report";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="wrapper">
          <MainSection />
          <Section />
          <Report />
        </div>
      </div>
    </>
  );
}

export default App;
