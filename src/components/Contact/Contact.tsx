import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./style.css";
import emailjs from "@emailjs/browser";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// const initState = { values: initValues };

const Contact = forwardRef((props, ref) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("LLQElBiNihID3Jufm"), []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const serviceId = "service_94zvvt8";
    const templateId = "template_z5cp5vp";
    try {
      // setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current?.value,
        company: companyRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({
    scrollToContact: () => {
      contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section className="contact" ref={contactSectionRef}>
      <h2>Contact Me</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            id="name"
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="input-field"
            placeholder="Enter your email"
          />
        </div>
        <div className="form_group">
          <label htmlFor="company">Company</label>
          <input
            ref={companyRef}
            type="text"
            id="company"
            className="input-field"
            placeholder="Enter your email"
          />
        </div>
        <div className="form_group">
          <label htmlFor="message">Message</label>
          <textarea ref={messageRef} id="message" className="textarea-field" />
        </div>
        <button className="btn-subscribe" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
});

export default Contact;
