import axios from "axios";

export const obtenerProductos = async(callbackSucces, callbackError)=>{
    const options = {
        method: "GET",
        url: "http://localhost:5000/store/obtener-productos"
    }

    await axios.request(options).then(callbackSucces).catch(callbackError)
}