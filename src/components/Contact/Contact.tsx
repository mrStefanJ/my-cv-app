import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = forwardRef((props, ref) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("LLQElBiNihID3Jufm"), []);

  const validateForm = () => {
    const newErrors = { name: "", email: "", company: "", message: "" };
    let isValid = true;

    if (!values.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!values.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!values.company) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    if (!values.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setValues({ name: "", email: "", company: "", message: "" });
    setErrors({ name: "", email: "", company: "", message: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const serviceId = "service_94zvvt8";
    const templateId = "template_z5cp5vp";
    try {
      await emailjs.send(serviceId, templateId, {
        name: values.name,
        company: values.company,
        email: values.email,
        message: values.message,
      });
      toast.success("Email successfully sent :)");
      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
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
            name="name"
            value={values.name}
            onChange={handleChange}
            className={`contact__input ${
              errors.name ? "contact__input--error" : ""
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="contact__text-error">{errors.name}</p>}
        </div>
        <div className="contact__form-group">
          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`contact__input ${
              errors.email ? "contact__input--error" : ""
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="contact__text-error">{errors.email}</p>
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
            name="company"
            value={values.company}
            onChange={handleChange}
            className={`contact__input ${
              errors.company ? "contact__input--error" : ""
            }`}
            placeholder="Enter your company"
          />
          {errors.company && (
            <p className="contact__text-error">{errors.company}</p>
          )}
        </div>
        <div className="contact__form-group">
          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            className={`contact__textarea ${
              errors.message ? "contact__textarea--error" : ""
            }`}
            placeholder="Enter your message"
          />
          {errors.message && (
            <p className="contact__text-error">{errors.message}</p>
          )}
        </div>
        <button className="contact__button" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Subscribe"}
        </button>
        <Toaster />
      </form>
    </section>
  );
});

export default Contact;
