const Etapa = require('../models/etapa')
const { request, response } = require('express')

const crearEtapa = async (req = request,
    res = response) => {
    try {
        const body = req.body
        const etapa = new Etapa(body)

        await etapa.save()

        return res.status(201).json(etapa)
    }
    catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const obtenerEtapas = async (req = request,
    res = response) => {
    try {
        const etapas = await Etapa.find()
        return res.status(200).json(etapas)
    }
    catch (error) {
        return res.status(500).json({ mensaje: error })
    }
} 

const actualizarEtapa = async (req = request,
    res = response) => {
        try {
            const id = req.params.id
            const {nombre} = req.body
            const data = {
                nombre
            }

            data.fechaModificacion = new Date()

            const etapa = await Etapa.findByIdAndUpdate(id, data, {new: true})
            return res.status(201).json(etapa)
        } catch (error) {
            return res.status(500).json({mensaje: error})
        }
    }

const borrarEtapa = async (req = request,
    res = response) => {
    try {
        const id = req.params.id
        await Etapa.findByIdAndDelete(id)
        return res.status(204).json({ mensaje: 'Etapa eliminada' })
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}


module.exports = {
    crearEtapa,
    obtenerEtapas,
    actualizarEtapa, 
    borrarEtapa}
