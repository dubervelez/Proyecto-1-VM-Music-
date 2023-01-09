import axios from "axios";

const puertoAcces = "https://api-music-vm.up.railway.app/";


export const obtenerProductos = async(callbackSucces, callbackError)=>{
    const options = {
        method: "GET",
        url: `${ puertoAcces }store/obtener-productos`
    }

    await axios.request(options).then(callbackSucces).catch(callbackError)
}






// crear compras

export const crearCompra = async (datosCompra, valorTotal, callbackSucces, callbackError )=>{
    const options ={
        method: 'POST',
        url: `${ puertoAcces }store/nueva-compra`,
        headers: {'Content-Type': 'application/json'},
        data:{
            productos: datosCompra[2],
            valorCompra: valorTotal
        }
    }

    await axios.request(options).then(callbackSucces).catch(callbackError)
}