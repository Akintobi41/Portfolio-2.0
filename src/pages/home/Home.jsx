import s from "./s_home.module.css";
import Aside from "../../components/aside/Aside";
import { description, about } from "./u_home";
const Home = () => {
  return (
    <section className={s.main_section}>
      <h2 className={s.name}>Hi, I{`'`}m Ezekiel</h2>
      <p className={s.section_bold}>{about}</p>
      <div className={s.avatar}>
        <img
          src="images/undraw_coding_re_iv62.svg"
          alt="Description"
          className={s.avatar_img}
          loading="lazy"
        />
      </div>
      <section className={s.about}>
        <p>{description} </p>
      </section>
      <Aside />
    </section>
  );
};

export default Home;
