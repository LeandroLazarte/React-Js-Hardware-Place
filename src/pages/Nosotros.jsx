import * as React from "react";
import './Nosotros.scss'

const Nosotros = () => {
    return (
        <div>
            {/* <!-- banner --> */}
            <div>
                <img className="banner" src="../assets/ImagesNosotros/aorus.png" alt="Banner" />
            </div>
            {/* <!-- Sobre Nosotros --> */}
            <div className="articulo">
                <h1 className="articulo__titulo">Historia de la empresa</h1>
                <div className="articulo__divUno">
                    <img className="articulo__imagenUno" src="../assets/ImagesNosotros/nosotros1.jpg" alt="img1" />
                    <p class ="articulo__textUno">Hardware Place SRL fue fundada en el año 2014 por tres emprendedores argentinos.El primer comercio se estableció en la ciudad de Mar del Plata, Provincia de Buenos Aires, y tenía como actividad principial soporte tecnico informático.El negocio
                    funcionaba como un taller de reparación, brindando servicios en las zonas cercanas pero con el tiempo fue creciendo y comenzó a diversificarse, incorporando todo tipo de hardware para PC.Se crearon cuentas en MercadoLibre y Facebook,
                    seguidas de una página web, lo que permitió que la empresa se acerque más a sus clientes y promocione sus productos.</p>
                </div>
                <div class="articulo__divDos">
                    <img className="articulo__imagenDos" src="../assets/ImagesNosotros/nosotros2.jpg" alt="img2" />
                    <p class ="articulo__textDos"> En el año 2018 se dio un paso más grande al abrir su segunda sucursal en el centro comercial Paseo Aldrey ubicado en la ciudad de Mar del Plata.Este nuevo proyecto ponía en funcionamiento un local mucho más grande que el anterior, acercando
                    a muchos potenciales nuevos clientes.</p>
                </div>
                <div class="articulo__divTres">
                    <img className="articulo__imagenTres" src="../assets/ImagesNosotros/nosotros3.jpg" alt="img3" />
                    <p className ="articulo__textTres"> El éxito alcanzado luego de su apertura llevó a mudar la primera sucursal ubicada en el barrio Bernardino Rivadavia a una de las zonas comerciales ms conocidas de la ciudad como es la calle Martín de Güemes.El objetivo era ampliar la cartera
                    de clientes aún más y fortalecer la presencia en la zona.</p>
                </div>
            </div>

        </div>
    )



}

export default Nosotros;