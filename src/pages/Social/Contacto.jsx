/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import './Contacto.scss';
import Footer from '../../components/footer/Footer';

const Contacto = () => {
    return (
        <><div>
            <img style={{ width: '100%', height: '20%' }} src="../../../assets/ImagesNosotros/contacto.jpg" alt="Contactoimg" />
            <h1 className="tituloPreguntas">Preguntas Frecuentes</h1>
        </div>
            <hr size="5px" color="black" />
            <div className="container-frecuentes">
                <div className="divseg">
                    <div className="preguntas">¿Cómo hago un pedido?</div>
                    <p>Para armar un pedido simplemente vas agregando al carrito todos los productos que queres, y al finalizar pones comprar. En el 1er paso te pregunta si necesitas envío, luego la forma de pago, luego accedes como cliente o creas un cliente nuevo
                        según corresponda confirmas el pedido y te asigna un número de pedido y te da los datos de pago según corresponda.</p>
                </div>
                <div className="divseg">
                    <div className="preguntas">¿Cómo uso el servicio de PosVenta y garantías?</div>
                    <div>Al pie de esta web nos tenes que dejar la consulta con un motivo de los que comiencem con 'PosVenta ...' y el servicio ténico va a estar respondiendo.</div>
                </div>
                <div className="divseg">
                    <div className="preguntas">¿Son precios finales o más IVA?</div>
                    <div> Todos los precios son finales IVA incluido.</div>
                </div>
                <div className="divseg">
                    <div className="preguntas">¿Los precios publicados en la web en que moneda están?</div>
                    <div>Todos los precios de la web están expresados en pesos argentinos.
                    </div>
                </div>
                <div className="divseg">
                    <div className="preguntas">¿Que costo tiene un envío?</div>
                    <div>El costo del mismo se abona con el pedido, es decir, el pedido incluye el costo del envío. El valor del envío depende de las dimensiones del paquete y distancia. Podrás saber el costo del envío en tiempo real desde www.hardwareplace.com.ar
                        ingresando tu código postal en el producto a adquirir o a tu pedido. Y según el pedido desde la misma web se le informa si es bonificado el mismo.</div>
                </div>
                <div className="divseg">
                    <div className="preguntas">¿Hacen envíos al interior?</div>
                    <div>Hacemos envíos a todo el país mediante OCA, que es un servicio Puerta a Puerta (puede llegar a tu domicilio o a la sucursal de OCA más cercana a tu domicilio).</div>
                </div>
                <div className="divseg">
                    <div className="preguntas">¿Hacen factura A?¿Cómo la solicito?</div>
                    <div>Efectivamente hacemos factura A, y en el caso de ser un cliente nuevo tiene que ingresar el cliente con número de CUIT y en las observaciones del pedido aclarar que es con factura A.</div>
                </div>
            </div>

            <section>
                <div>
                    <h2 className="ayuda">HARDWARE PLACE esta para ayudarte¿Cuál es tu consulta?</h2>
                    <div className="msjauto">
                        <a href="#" className="msjauto">¿Cómo informo mi pago bancario?</a>
                        <a href="#" className="msjauto">¿Hacen envíos?</a>
                        <a href="#" className="msjauto">¿Cómo gestiono la garantía o cambio?</a>
                        <a href="#" className="msjauto">¿Mi pedido todavía no llego.¿Que hago?</a>
                        <a href="#" className="msjauto">¿Donde puedo ver el estado de pedido?</a>
                        <a href="#" className="msjauto">¿A que télefono puedo contactarme?</a>
                    </div>
                    <div>
                        <form action="text">
                            <textarea  id="text-area" name="texto" cols="100" rows="10" placeholder="Escriba aquí otra consulta">
                            </textarea>
                            <div className="card-body align-content-center justify-content-center">
                                <button type="button" id="boton-text-area" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
        
    )



}

export default Contacto;