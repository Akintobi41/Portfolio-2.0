import s from "./s_footer.module.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <p>Akintobi &copy; {year}</p>
    </footer>
  );
};

export default Footer;
