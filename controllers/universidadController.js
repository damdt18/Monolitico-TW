const Universidad = require('../models/universidad')
const { request, response } = require('express')

const crearUniversidad = async (req = request,
    res = response) => {
    try {
        const body = req.body
        console.log(body)

        const universidad = new Universidad(body)
        await universidad.save()
        return res.status(201).json(universidad)

    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const obtenerUniversidades = async (req = request,
    res = response) => {
    try {
        const universidades = await Universidad.find()
        return res.status(200).json(universidades)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const actualizarUniversidad = async (req = request,
    res = response) => {
    try {
        const id = req.params.id
        const { nombre } = req.body
        const data = {
            nombre
        }
        data.fechaModificacion = new Date()
        const universidad = await Universidad.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(universidad)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const borrarUniversidad = async (req = request,
    res = response) => {
    try {
        const id = req.params.id
        await Universidad.findByIdAndDelete(id)
        return res.status(204).json({ mensaje: 'Universidad eliminada' })
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}
module.exports = {
    crearUniversidad,
    obtenerUniversidades,
    actualizarUniversidad,
    borrarUniversidad
}