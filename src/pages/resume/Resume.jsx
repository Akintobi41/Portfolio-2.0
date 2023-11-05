import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useEffect, useState } from "react";
import { fetchContentfulData } from "../projects/u_projects";
import s from "/src/pages/projects/s_project.module.css";

const Resume = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const { items } = await fetchContentfulData(
          "resume"
        );
        if (items) setLoading(false);
        setData(items);
      } catch (e) {
        setLoading(false);
        console.error("Failed to fetch");
      }
    })();
  }, []);
  const resume = data
    .map((file) => file.fields.myResume.fields.file.url)
    .join("");
  const resumeUrl = `https://${resume.slice(2)}`;

  return (
    <>
      <section
        className={`${
          loading ? s["loader-container"] : s["loader"]
        }`}
      >
        <div
          className={`${loading ? s.loadout : s.loader}`}
        ></div>
      </section>
      <section className={s["resume-container"]}>
        {resumeUrl.endsWith(".pdf") && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                height: "350px",
                margin: "2rem 0",
              }}
            >
              <Viewer fileUrl={resumeUrl} />
            </div>
          </Worker>
        )}
      </section>
    </>
  );
};

export default Resume;
