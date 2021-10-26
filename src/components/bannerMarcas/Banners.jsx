import React from 'react';
import './bannerMarcas.scss';

const stylesImages={width: '100%', height: '100%'}
const Banners = () => {
    return (
        <div className="Marcas">
            <h3 className="tituloM">Trabajamos con los mejores productos</h3>
            <div className="marca_w ">
                <img style={stylesImages} src="../assets/ImagesMarcas/marca.jpg " alt="logo 1 " />
            </div>
            <div className="marca_w ">
                <img style={stylesImages} src="../assets/ImagesMarcas/marca2.jpg " alt="logo 2 " />
            </div>
            <div className="marca_w ">
                <img style={stylesImages} src="../assets/ImagesMarcas/marca3.jpg " alt="logo 3 " />
            </div>
            <div className="marca_w ">
                <img style={stylesImages} src="../assets/ImagesMarcas/marca4.jpg " alt="logo 4 " />
            </div>
            <div className="marca_w ">
                <img style={stylesImages} src="../assets/ImagesMarcas/marca5.jpg " alt="logo 5 " />
            </div>
            <div className="marca_w ">
                <img style={stylesImages} src="../assets/ImagesMarcas/marca6.jpg " alt="logo 6 " />
            </div>
            <div className="marca_w ">
                <img style={stylesImages} src="../assets/ImagesMarcas/marca8.jpg " alt="logo 7 " />
            </div>
            <div className="marca_w ">
                <img style={stylesImages} src="../assets/ImagesMarcas/marca5.jpg " alt="logo 8 " />
            </div>
        </div>

    )
}

export default Banners;