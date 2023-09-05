import s from "./s_error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className={s.error}>
      <Link to={"/"} className={s["head-back"]}>
        Let{`'`}s head back
      </Link>
      <section className={s.codes}>
        <p className={s.error_p}>404.</p>
      </section>
      <small className={s.small}>
        Lost on the digital highway and looking for
        me?Consider this 404 page your rest stop - let{`'`}s
        guide you back home together!
      </small>
    </section>
  );
};

export default Error;
