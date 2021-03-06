import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import CarouselImages from "../../components/carouselImages/CarouselImages";
import Banner from "../../components/bannerMarcas/Banners";
import Footer from "../../components/footer/Footer";

const styles = {color: 'orange' , textDecoration: 'underline', textAlign: 'center'};
const Home = () => {
    return (
        <div>
            <CarouselImages/>
            <h1 style={styles}>Productos Destacados</h1>
            <ItemListContainer />
            <Banner />
            <Footer />
        </div>
    )
}
export default Home;
