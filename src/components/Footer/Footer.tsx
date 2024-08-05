import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <p className="footer__contact-text">
          Email: <span>stefanjoncic92@gmail.com</span>
        </p>
        <p className="footer__contact-text">
          Phone: <span>+381 64 000 88 17</span>
        </p>
        <p className="footer__contact-text">
          City: <span>Belgrade</span>
        </p>
      </div>
      <p className="footer__text">Desing and CopyWrite by Stefan Joncic 2024</p>
    </footer>
  );
};

export default Footer;
