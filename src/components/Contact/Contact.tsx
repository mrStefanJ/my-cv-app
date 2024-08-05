import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./style.css";
import emailjs from "@emailjs/browser";

const Contact = forwardRef((props, ref) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => emailjs.init("LLQElBiNihID3Jufm"), []);

  const validateForm = () => {
    const newErrors = { name: "", email: "", company: "", message: "" };
    let isValid = true;

    if (!nameRef.current?.value) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!emailRef.current?.value) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current?.value)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!companyRef.current?.value) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    if (!messageRef.current?.value) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (companyRef.current) companyRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
    setErrors({ name: "", email: "", company: "", message: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const serviceId = "service_94zvvt8";
    const templateId = "template_z5cp5vp";
    try {
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current?.value,
        company: companyRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      });
      alert("Email successfully sent, check your inbox");
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  useImperativeHandle(ref, () => ({
    scrollToContact: () => {
      contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section className="contact" ref={contactSectionRef}>
      <h2 className="contact__title">Contact Me</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-group">
          <label className="contact__label" htmlFor="name">
            Name
          </label>
          <input
            ref={nameRef}
            id="name"
            className="input-field"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="contact__input-text--error">{errors.name}</p>
          )}
        </div>
        <div className="contact__form-group">
          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="input-field"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="contact__input-text--error">{errors.email}</p>
          )}
        </div>
        <div className="contact__form-group">
          <label className="contact__label" htmlFor="company">
            Company
          </label>
          <input
            ref={companyRef}
            type="text"
            id="company"
            className="input-field"
            placeholder="Enter your company"
          />
          {errors.company && (
            <p className="contact__input-text--error">{errors.company}</p>
          )}
        </div>
        <div className="contact__form-group">
          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            ref={messageRef}
            id="message"
            className="textarea-field"
            placeholder="Enter your message"
          />
          {errors.message && (
            <p className="contact__input-text--error">{errors.message}</p>
          )}
        </div>
        <button className="contact__button" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
});

export default Contact;
