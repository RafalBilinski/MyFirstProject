import "./Home.css";
import legoBrick from "../../assets/lego-brick-icon-16.webp";

const Home = () => {
  return (
    <div id="welcome-section" className="container">
      <div className="wrapper" id="wrapper">
        <h1 id="name">
          My name is <span>Rafał</span>
        </h1>
        <h3 id="description">
          I'm a <span>engeneer</span> and I believe that everything in the world is a{" "}
          <span>lego piece</span>
        </h3>
        <p id="motto">
          <span>It's all about the scale! :)</span>
        </p>
      </div>
      <img
        className="welcome-img"
        src={legoBrick}
        alt="lego brick icon"
      />
    </div>
  );
};

export default Home;
