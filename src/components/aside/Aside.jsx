import s from "./s_aside.module.css";
const Aside = () => {
  const socials = [
    {
      class: s["logo-1"],
      link: "https://twitter.com/Zeke_aa",
      logo: "/images/logo-twitter.svg",
      alt: "twitter-logo",
    },
    {
      class: s["logo-2"],
      link: "https://www.linkedin.com/in/moyinoluwa-akintobi-83a743187/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2F0NA%2B4E0QS%2BTnWtOOxWQ%2Bg%3D%3D",
      logo: "/images/logo-linkedin.svg",
      alt: "linkedin-logo",
    },
    {
      class: s["logo-3"],
      link: "mailto:akintobi41moyinoluwa@gmail.com",
      logo: "/images/mail-open-sharp.svg",
      alt: "mail-logo",
    },
    {
      class: s["logo-4"],
      link: "https://github.com/Akintobi41?tab=overview&from=2022-07-01&to=2022-07-03",
      logo: "/images/logo-github.svg",
      alt: "github-logo",
    },
  ];
  return (
    <aside className={s.socials}>
      {socials.map((social) => (
        <figure className={social.class} key={social.class}>
          <a href={social.link}>
            <img src={social.logo} alt={social.alt} loading="lazy" />
          </a>
        </figure>
      ))}
    </aside>
  );
};

export default Aside;
