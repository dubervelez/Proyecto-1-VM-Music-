//Funciones para page-Store

export const sumarCantidad = (index, num, carroCompra, setCarroCompra) => {
    const { cantidad, ...rest } = carroCompra[2]['producto'+index];
    const updatedProducto = { cantidad: num + 1 , ...rest };
    const updatedCarroCompra = [...carroCompra];
    updatedCarroCompra[2]['producto'+index] = updatedProducto;
    updatedCarroCompra[0]['cantidadCarrito'] = updatedCarroCompra[0]['cantidadCarrito'] + 1;
    
    setCarroCompra(updatedCarroCompra);
};

export const restarCantidad = (index, num, carroCompra, setCarroCompra)=>{
    let cantidadNueva = Math.max( num - 1 , 1); 
    const { cantidad, ...rest } = carroCompra[2]['producto'+index];
    const updatedProducto = { cantidad: cantidadNueva , ...rest };
    const updatedCarroCompra = [...carroCompra];
    updatedCarroCompra[2]['producto'+index] = updatedProducto;
    const min = Object.keys(updatedCarroCompra[2]).length 
    updatedCarroCompra[0]['cantidadCarrito'] = Math.max (updatedCarroCompra[0]['cantidadCarrito'] - 1, min);
    setCarroCompra(updatedCarroCompra);
};