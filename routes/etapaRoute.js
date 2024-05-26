const { Router } = require('express')
const { crearEtapa,
    obtenerEtapas,
    actualizarEtapa,
    borrarEtapa
} = require('../controllers/etapaController')

const router = Router()

//crear 
router.post('/', crearEtapa)

//obtener
router.get('/', obtenerEtapas)

//actualizar
router.put('/:id', actualizarEtapa)

//eliminar
router.delete('/:id', borrarEtapa)



module.exports = router
