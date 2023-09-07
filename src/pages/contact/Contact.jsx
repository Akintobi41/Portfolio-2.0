import s from "./s_contact.module.css";
import Aside from "../../components/aside/Aside";

const Contact = () => {
  const formList = [
    {
      name: "Full Name",
      type: "name",
      class: `${s.input}`,
    },
    {
      name: "E-mail",
      type: "email",
      class: `${s.input} ${s.mail}`,
    },
    {
      name: "Message",
      type: "textarea",
      class: `${s.textarea}`,
      placeholder: "Type your message here",
    },
  ];

  return (
    <>
      <section className={s["main-section"]}>
        <h2 className={s.title}>Contact Me</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className={s.form}
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />

          {formList.map((input) => (
            <label className={s.label} key={input.type}>
              {input.name} <br />
              {input.name === "Message" ? (
                <textarea
                  name="message"
                  placeholder={input.placeholder}
                  className={input.class}
                  required
                ></textarea>
              ) : (
                <input
                  name={input.type}
                  type={input.type}
                  className={input.class}
                  required
                />
              )}
            </label>
          ))}
          <button className={s.button}>Submit</button>
        </form>
      </section>
      <Aside />
    </>
  );
};

export default Contact;
