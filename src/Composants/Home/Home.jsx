import Menu from "../Menu/Menu";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <h1>Welcome to my Wikipédia Search</h1>
      <img className="logowiki" src="./src/img/wikilogo.png"></img>
    </>
  );
}

export default Home;
