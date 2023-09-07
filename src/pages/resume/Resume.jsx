import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          height: "750px",
          margin: "2rem 0",
        }}
      >
        <Viewer fileUrl="/Akintobi-MoyinoluwaRESUME.pdf" />
      </div>
    </Worker>
  );
};

export default Resume;
