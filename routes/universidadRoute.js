const {Router} = require('express')

const {
    crearUniversidad,
    obtenerUniversidades,
    actualizarUniversidad,
    borrarUniversidad
} = require('../controllers/universidadController')

const router = Router()

//crear
router.post('/', crearUniversidad)

//obtener
router.get('/', obtenerUniversidades)

//actualizar    
router.put('/:id', actualizarUniversidad)   

//eliminar
router.delete('/:id', borrarUniversidad)

module.exports = router