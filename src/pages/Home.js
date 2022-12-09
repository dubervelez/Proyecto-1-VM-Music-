import Header from "../components/Header";
import Slider from "../components/Slider";
import Cards from "../components/Cards";
function Home() {
    return(
        <>
            <Header></Header>
            <Slider></Slider>
            <h2 className="titulo-cards">ULTIMOS LANZAMIENTOS</h2>
            <Cards></Cards>
        </>
    );
};

export default Home;