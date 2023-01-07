import axios from "axios";

export const obtenerProductos = async(callbackSucces, callbackError)=>{
    const options = {
        method: "GET",
        url: "http://localhost:5000/store/obtener-productos"
    }

    await axios.request(options).then(callbackSucces).catch(callbackError)
}






// crear compras

export const crearCompra = async (datosCompra, valorTotal, callbackSucces, callbackError )=>{
    const options ={
        method: 'POST',
        url: 'http://localhost:5000/store/nueva-compra',
        headers: {'Content-Type': 'application/json'},
        data:{
            productos: datosCompra[2],
            valorCompra: valorTotal
        }
    }

    await axios.request(options).then(callbackSucces).catch(callbackError)
}