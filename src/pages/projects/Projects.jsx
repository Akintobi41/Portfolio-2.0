import { useEffect, useState } from "react";
import s from "./s_project.module.css";
import { fetchContentfulData } from "./u_projects";
import React from "react";
import usePagination from "./usePagination";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    handleNext,
    handlePrevious,
    exactPage,
    startIndex,
    totalPages,
    currentItems,
  } = usePagination(data);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const { items } = await fetchContentfulData(
          "project"
        );
        if (items) setLoading(false);
        setData(items);
      } catch (e) {
        setLoading(false);
        console.error("Failed to fetch");
      }
    })();
  }, []);
  const btnSection = [
    {
      id: 1,
      class: `${s.button} ${s["min-content"]}`,
      label:
        data.length && currentItems.length + startIndex,
    },
    {
      id: 2,
      class: `${s.button} ${s["max-content"]}`,
      label: data.length,
    },
    {
      id: 3,
      class: `${s.button} ${
        exactPage < totalPages ? s["previous-button"] : ""
      }`,
      label: "<",
    },
    {
      id: 4,
      class: `${s.button} ${
        exactPage === totalPages ? s["next-button"] : ""
      }`,
      label: ">",
    },
  ];

  const setBg = (url) => ({
    backgroundImage: `url(${url})`,
  });

  return (
    <section className={s["main-section"]}>
      <h2 className={s.title}>Projects</h2>
      <main className={s.main}>
        {currentItems.map((data) => (
          <section className={s.projects} key={data.sys.id}>
            <section className={s["pictures-wrapper"]}>
              <section
                style={setBg(
                  data.fields.image.fields.file.url
                )}
                className={s.pictures}
              ></section>
            </section>
            <p className={s["project-title"]}>
              {data.fields.title}
            </p>
            <p className={s.summary}>
              {data.fields.description}
            </p>
            <aside className={s.aside}>
              <a
                href={data.fields.liveLink}
                className={s.link}
              >
                <button className={s["hvr-bounce-to-left"]}>
                  Live
                </button>
              </a>
              <a
                href={data.fields.githubLink}
                className={s.link}
              >
                <button
                  className={s["hvr-bounce-to-right"]}
                >
                  Repository
                </button>
              </a>
            </aside>
          </section>
        ))}
      </main>
      <section
        className={`${
          loading ? s["loader-container"] : s["loader"]
        }`}
      >
        <div
          className={`${loading ? s.loadout : s.loader}`}
        ></div>
      </section>
      <section className={s.pagination}>
        {btnSection.map((item, index) => (
          <React.Fragment key={item.id}>
            <button
              className={item.class}
              onClick={
                index === 2
                  ? handlePrevious
                  : index === 3
                  ? handleNext
                  : undefined
              }
            >
              {item.label}
            </button>
            {index === 0 && <span>Of</span>}
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};

export default Projects;
