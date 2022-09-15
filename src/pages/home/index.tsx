import CardRecipes from "../../components/CardRecipes";
import TitleBody from "../../components/TitleBody";
import imageOne from "../../assets/Ojingeo-muchim-5.png";
import imageTwo from "../../assets/Ojingeo-muchim.png";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <TitleBody title="Nuevas recetas" />
      <div className="home">
        <CardRecipes
          title="Ojingeo"
          subtitle="Muchim"
          image={imageOne}
          isFavorite={true}
          points="5.0"
          key={1}
        />
        <CardRecipes
          title="Cola"
          subtitle="Chicken"
          image={imageTwo}
          isFavorite={true}
          points="3.8"
          key={2}
        />
        <CardRecipes
          title="Ojingeo"
          subtitle="Muchim"
          image={imageOne}
          isFavorite={true}
          points="5.0"
          key={1}
        />
        <CardRecipes
          title="Cola"
          subtitle="Chicken"
          image={imageTwo}
          isFavorite={true}
          points="3.8"
          key={2}
        />
      </div>
    </>
  );
};

export default Home;
