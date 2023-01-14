import axios from "axios";

const puertoAcces = "https://api-music-vm.up.railway.app/";


export const obtenerProductos = async(callbackSucces, callbackError)=>{
    const options = {
        method: "GET",
        url: `${ puertoAcces }store/obtener-productos`
    }

    await axios.request(options).then(callbackSucces).catch(callbackError)
}

export const crearProducto = async (datosProducto, callbackSucces, callbackError)=>{
  const options = {
    method: 'POST',
    url: 'https://api-music-vm.up.railway.app/store/nuevo-producto',
    headers: {'Content-Type': 'application/json'},
    data: {
      ref: datosProducto.ref ,
      producto: datosProducto.producto ,
      artista: datosProducto.artista ,
      precio: datosProducto.precio ,
      oferta: datosProducto.oferta ,
      stock: datosProducto.stock ,
      estado: datosProducto.estado ,
      categoria: datosProducto.categoria ,
      caracteristicas: datosProducto.caracteristicas ,
      miniatura: datosProducto.miniatura ,
			ventas: 0
    }
  }

    await axios.request(options).then(callbackSucces).catch(callbackError);
}

export const eliminarProducto = async (id, callbackSucces, callbackError)=>{

  const options = {
		method: 'DELETE',
		url: 'https://api-music-vm.up.railway.app/store/eliminar-producto',
		headers: {'Content-Type': 'application/json'},
  	data: {_id: id }
	}

	await axios.request(options).then(callbackSucces).catch(callbackError);


}

export const editarProductos = async (id, datosProducto, callbackSucces, callbackError)=>{
  const options = {
    method: 'PATCH',
    url: 'https://api-music-vm.up.railway.app/store/modificar-producto',
    headers: {'Content-Type': 'application/json'},
    data: {
      _id: id,
      ref: datosProducto.ref ,
      producto: datosProducto.producto ,
      artista: datosProducto.artista ,
      precio: datosProducto.precio ,
      oferta: datosProducto.oferta ,
      stock: datosProducto.stock ,
      estado: datosProducto.estado ,
      categoria: datosProducto.categoria ,
      caracteristicas: datosProducto.caracteristicas ,
      miniatura: datosProducto.miniatura ,
			
    }
  }
  await axios.request(options).then(callbackSucces).catch(callbackError);
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