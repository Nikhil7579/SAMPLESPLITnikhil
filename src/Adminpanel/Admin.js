import { BrowserRouter } from "react-router-dom";
import "./Admin.css";
import Footer from "./Components/Footer";
import HearderComponent from "./Components/Header/HearderComponent";

function Admin() {
  return (
    <BrowserRouter>
      <HearderComponent />;
      <Footer />
    </BrowserRouter>
  );
}

export default Admin;
