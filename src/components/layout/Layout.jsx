/* eslint-disable react/prop-types */
import s from "./s_layout.module.css";
import Navbar from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <main className={s.layout}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <Navbar />
        </header>
        {children}
      </div>
    </main>
  );
};
export default Layout;
