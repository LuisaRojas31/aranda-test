import footerImg from "../../assets/Grupo7610.png";
import "./styles.scss";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <h1>Con el Patrocinio de</h1>
      <img src={footerImg} alt="footer image" />
    </section>
  );
};

export default Footer;
