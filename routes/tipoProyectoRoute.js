const {Router} = require('express')

const {
    crearTipoProyecto,
    obtenerTipoProyectos,
    actualizarTipoProyecto,
    borrarTipoProyecto
} = require('../controllers/tipoProyectoController')


const router = Router()

//crear
router.post('/', crearTipoProyecto)

//obtener
router.get('/', obtenerTipoProyectos)

//actualizar
router.put('/:id', actualizarTipoProyecto)

//eliminar
router.delete('/:id', borrarTipoProyecto)

module.exports = router