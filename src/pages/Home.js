import Header from "../components/Header";
import Slider from "../components/Slider";
import Cards from "../components/Cards";
import Articulo from "../components/Articulo";
function Home() {
    return(
        <>
            <Header></Header>
            <Slider></Slider>
            <h2 className="titulo-cards">ULTIMOS LANZAMIENTOS</h2>
            <Cards></Cards>
            <Articulo></Articulo>
        </>
    );
};

export default Home;