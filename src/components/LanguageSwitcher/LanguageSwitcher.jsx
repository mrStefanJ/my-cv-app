import { useTranslation } from 'react-i18next';
import "./style.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className='language'>
      <select className="language-select" onChange={(event) => changeLanguage(event.target.value)}>
        <option value="en">ENG</option>
        <option value="sr">SRB</option>
      </select>
    </div>
  );
};
export default LanguageSwitcher;