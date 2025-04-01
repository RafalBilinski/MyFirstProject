import "./Home.css";

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
        src="https://imgs.search.brave.com/b1d47yLxjQqCCgpYMRge3KchRTUNc5Y8QQ7wwS2rulw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9sZWdv/LWJyaWNrLWljb24v/bGVnby1icmljay1p/Y29uLTE2LmpwZw"
        alt="lego brick icon"
      />
    </div>
  );
};

export default Home;
