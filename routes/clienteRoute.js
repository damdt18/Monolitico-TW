const  {Router} = require('express')

const {crearCliente,
    obtenerClientes,
    actualizarCliente,
    borrarCliente
} = require ('../controllers/clienteController')


const router = Router()
//crear
router.post('/', crearCliente)

//obtener
router.get('/', obtenerClientes)

//actualizar
    router.put('/:id', actualizarCliente)

//eliminar  
router.delete('/:id', borrarCliente)

module.exports = router