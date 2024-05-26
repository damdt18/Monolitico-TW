const mongoose = require('mongoose')

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log('Conexión Exitosa!')
         
    } catch (e) {
        console.log('Error de conexión', e)
        throw new Error('Error de conexión')
    }
}

module.exports = { dbConnection }