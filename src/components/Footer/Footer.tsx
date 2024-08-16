import { useTranslation } from "react-i18next";
import "./style.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p className="footer__text">{t("desing")} Stefan Joncic 2024</p>
    </footer>
  );
};

export default Footer;
