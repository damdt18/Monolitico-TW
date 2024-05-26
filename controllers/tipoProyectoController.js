const TipoProyecto = require('../models/tipoProyecto');
const { request, response } = require('express')

//crear

const crearTipoProyecto = async (req = request,
    res = response) => {
    try {
        console.log(req.body)
        const body = req.body

        const tipoProyecto = new TipoProyecto(body)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)

    } catch (error) {
        return res.status(500).json({ mensaje: error })


    }
}


const obtenerTipoProyectos = async (req = request,
    res = response) => {
    try {

        const tipoProyectos = await TipoProyecto.find()

        return res.status(200).json(tipoProyectos)
    } catch (error) {

        return res.status(500).json({
            mensaje: error
        })
    }
}
const actualizarTipoProyecto = async (req = request,
    res = response) => {
    try {

        const id = req.params.id

        const { nombre } = req.body
        const data = {
            nombre
        }
        data.fechaActualizacion = new Date()

        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(
            id, data, { new: true })

        return res.status(201).json(tipoProyecto)

    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}


const borrarTipoProyecto = async (req = request,
    res = response) => {
    try {
        const id = req.params.id
        await TipoProyecto.findByIdAndDelete(id)
        return res.status(204).json({ mensaje: 'TipoProyecto eliminado' })
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

module.exports = {
    crearTipoProyecto,
    obtenerTipoProyectos,
    actualizarTipoProyecto,
    borrarTipoProyecto
}