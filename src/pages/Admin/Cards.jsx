import Layout from './Layout'
import '../../styles/admin/cards.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faTrash, faPen, faBan } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { editarCard, eliminarCard, nuevaCard, obtenerCards } from '../../utils/Api';
import { ToastContainer, toast } from 'react-toastify';
import { useCardsData } from '../../context/contextCards';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'
import { nanoid } from 'nanoid'


function AdminCards() {
  const [ datosEditar, setDatosEditar] = useState({});
  const formCards = useRef(null)
  const { setCardsData} = useCardsData();
  const [ operacion, setOperacion] = useState(true);
 
  useEffect(() => {
    obtenerCards(
      (response)=>{
        setCardsData(response.data)
      },
      (error)=>{
        console.error(error);
      }
    )
  }, [])

  const submitFormCards = (e)=>{
    let datosCards = {}
    const datosFormulario = new FormData(formCards.current) 
    datosFormulario.forEach((value, key) => {
      datosCards[key] = value
    });

    if (operacion){
      nuevaCard(datosCards, 
      (response)=>{
        toast.success('Card creada con exito',{theme:'dark'})
      },
      (error)=>{
        toast.error('Error en la creacion de la Card',{theme:'dark'})
      });
    }else{
      const validacion = ()=>{ 
        if(datosCards.artista === datosEditar.artista
          && datosCards.cancion === datosEditar.cancion
          && datosCards.imagen === datosEditar.imagen
          && datosCards.genero === datosEditar.genero
          && datosCards.fecha === datosEditar.fecha){
          return false
        }
        else{
          return true
        }
      }
      // validacion para ejecutar la funcion de editar la BD solo si hay un cambio en los datos iniciales
      if (validacion()){
        datosCards['id'] = datosEditar._id 
        editarCard(datosCards, 
        (response)=>{
          toast.success('Card actualizada con exito',{theme:'dark'})
        },
        (error)=>{
          toast.error('Error al actualizar la Card',{theme:'dark'})
        }  
        );
        setOperacion(true)
      }else{
        e.preventDefault();
        toast.info('no ha hecho ninguna modificacion',{theme:'light', position:'bottom-center'})
      };
    }
  }

  // renderizacion condicional para el formulario de editar y crear
  const editar = (dato)=>{
    setOperacion(false)
    setDatosEditar(dato)  
  }

  return (
    <Layout>
      <section className='contenedor-admin-cards'>
        <h1 className='titulo-adm-card'>Administracion CARDS</h1>
        <form ref={formCards} className={`form-cards ${!operacion && 'form-actualizar' }`} onSubmit={submitFormCards}>
        {operacion ? (
        <>
					<div className='titulo-form-cards'>
						<h2 className='titulo-form--h2'>Crear Nueva Cards</h2>
						<FontAwesomeIcon className='titulo-form--icon' icon={faMusic} />
					</div>
          <div className='contenedor-artista-cancion'>
						<label className='label-input' htmlFor="artista">
            	<input required type="text" name="artista"  className='input-card-text' placeholder='Artista' defaultValue="" />
						</label>
						<label className='label-input' htmlFor="cancion">
            	<input type="text" name="cancion" className='input-card-text' placeholder='Canción' required defaultValue="" />
						</label>
          </div>
					<div className='otros-input'>
						<label className='label-input' htmlFor="imagen">
							<input type="url" name="imagen" className='input-card-text' placeholder='ingrese link de imagen http://...' required defaultValue="" />
						</label>
						<label className='label-input' htmlFor="genero">
							<input type="text" name="genero" className='input-card-text' placeholder='Genero' required defaultValue="" />
						</label>
						<label className='label-input' htmlFor="fecha">
							<input type="text" name="fecha" className='input-card-text' placeholder='fecha de lanzamiento' required defaultValue="" />
						</label>
					</div>
        </>):(
        <>
          <div className='titulo-form-cards'>
						<h2 className='titulo-form--h2'>Actualizar Cards</h2>
						<FontAwesomeIcon className='titulo-form--icon' icon={faMusic} />
					</div>
          <div className='contenedor-artista-cancion'>
						<label className='label-input' htmlFor="artista">
            	<input required type="text" name="artista"  className='input-card-text' placeholder='Artista' defaultValue={datosEditar.artista}  />
						</label>
						<label className='label-input' htmlFor="cancion">
            	<input type="text" name="cancion" className='input-card-text' placeholder='Canción' required defaultValue={datosEditar.cancion} />
						</label>
          </div>
					<div className='otros-input'>
						<label className='label-input' htmlFor="imagen">
							<input type="url" name="imagen" className='input-card-text' placeholder='ingrese link de imagen http://...' required defaultValue={datosEditar.imagen} />
						</label>
						<label className='label-input' htmlFor="genero">
							<input type="text" name="genero" className='input-card-text' placeholder='Genero' required defaultValue={datosEditar.genero} />
						</label>
						<label className='label-input' htmlFor="fecha">
							<input type="text" name="fecha" className='input-card-text' placeholder='fecha de lanzamiento' required defaultValue={datosEditar.fecha} />
						</label>
					</div>
        </>)}
          <button className={`button-form-cards ${!operacion && 'btn-actualizar' }`} type='submit' >{!operacion ? <span className='btn-actualizar'>ACTUALIZAR</span>  :<span className='btn-crear'>CREAR CARDS</span>}</button>
          {!operacion && ( <button className='btn-cancelar' onClick={()=>{ setOperacion(true) }}>Cancelar</button> )}
          <ToastContainer position="bottom-left" autoClose={1000}  />
        </form>
        <div>
          <TablaDatos operacion={editar}></TablaDatos>
        </div>
      </section>
    </Layout>
  )
}


const TablaDatos = ({ operacion })=>{
  const {cardsData} = useCardsData();
  let contador = 1;
  const [openDialogo, setOpenDialogo] = useState(false);
  const [idEliminar, setIdEliminar] = useState("");
  const [editarActivo, setEditarActivo] = useState(false);
  const eliminarCardData = async (idcancion)=>{
    eliminarCard(idcancion,
      (response)=>{
        toast.success('Card eliminada con exito',{theme:'dark'})
        setOpenDialogo(false)
      },
      (error)=>{
        toast.error('Error al eliminar los datos',{theme:'dark'})
      }
    )
    
  }

  return(
    <>
    <div className="contenedor-tabla-cards">
      <h2 className="titulo-tabla">Card No.</h2>
      <h2 className="titulo-tabla">Artista</h2>
      <h2 className="titulo-tabla">Cancion</h2>
      <h2 className="titulo-tabla">Genero</h2>
      <h2 className="titulo-tabla">Fecha</h2>
      <h2 className="titulo-tabla">Acciones</h2>
    </div>
      { cardsData.map((dato, i)=>{
        return(
          <div key={nanoid()} className='grid-celdas'>
            <p className="celda-tabla">{contador++}</p>
            <p className="celda-tabla">{dato.artista}</p>
            <p className="celda-tabla">{dato.cancion}</p>
            <p className="celda-tabla">{dato.genero}</p>
            <p className="celda-tabla">{dato.fecha}</p>
            <div className='celda-tabla'> 
              <span className='icon-edit'><FontAwesomeIcon icon={faPen} onClick={ ()=>{ operacion(dato); setEditarActivo(true) } } ></FontAwesomeIcon></span> 
              <span className='icon-delete'><FontAwesomeIcon icon={faTrash} onClick={()=>{setOpenDialogo(true); setIdEliminar(dato.cancion)}} ></FontAwesomeIcon></span> 
            </div>
          </div>
        )
      }) }
      <Dialog open={openDialogo} aria-labelledby="alert-dialog-title" >
        <DialogTitle id="alert-dialog-title">
        {"¿Esta seguro de eliminar la card seleccionada?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={()=>{setOpenDialogo(false)}} variant="outlined" color="error">Cancelar</Button>
          <Button onClick={()=>{eliminarCardData(idEliminar)}} autoFocus variant="outlined" color="success">Aceptar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AdminCards