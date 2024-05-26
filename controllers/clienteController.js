const Cliente = require('../models/cliente')
const { request, response } = require('express')


//crear

const crearCliente = async (req = request,
    res = response) => {
    try {
        const body = req.body
        const cliente = new Cliente(body)

        await cliente.save()

        return res.status(201).json(cliente)
    }
    catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const obtenerClientes = async (req = request,
    res = response) => {
    try {
        const clientes = await Cliente.find()

        return res.status(200).json(clientes)


    } catch (error) {
        return res.status(500).json({ mensaje: error })


    }
}


const actualizarCliente = async (req = request,
    res = response) => {
    try {

        const id = req.params.id
        const { nombre, email } = req.body

        const data = {
            nombre,
            email
        }
        data.fechaActualizacion = new Date()

        const cliente
            = await Cliente.findByIdAndUpdate(id, data, { new: true })

        return res.status(201).json(cliente)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

const borrarCliente = async (req = request,
    res = response) => {
    try {
        const id = req.params.id
        const cliente = await Cliente.findByIdAndDelete(id)
        return res.status(204).json({ mensaje: "Cliente borrado" })
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

module.exports = {
    crearCliente,
    obtenerClientes,
    actualizarCliente,
    borrarCliente
}