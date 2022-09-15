import { ITitleBody } from "./interface";
import "./styles.scss";

const TitleBody = ({ title }: ITitleBody) => {
  return (
    <section className="title-body">
      <h1>{title}</h1>
    </section>
  );
};

export default TitleBody;
