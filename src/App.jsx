import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Resume from "./pages/resume/Resume";
import Error from "./pages/error/error";
import { Worker } from "@react-pdf-viewer/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects"
              element={<Projects />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Layout>
      </Router>
    </Worker>
  );
}

export default App;
