const mongoose = require ('mongoose')
 const url_bd = 'mongodb://localhost:27017/EMPRESA'
 
 
 mongoose.connect(url_bd)
.then(() => {
    console.log('si funciono')
    
})
.catch((err) => {
    console.log('no funciona')
    
})
//se realizan esquemas para las bases de datos 
const Esquema_Empleado = new mongoose.Schema({
    name: {
        type: String
    },
    apepat: {
        type: String
    },
    age: {
        type: String
    },
    id: {
        type: String
    },
    position: {
        type: String
    },
    area: {
        type: String
    },
    shift: {
        type: String
    }
})

//se crean las colecciones 
const modelo_Empleado = new mongoose.model('datos del empleado', Esquema_Empleado)

//crear datos
modelo_Empleado.create({
    name: "Dominic",
    apepat: "Santiago",
    age: "35",
    id: "0002",
    position: "engineer",
    area: "maintanence",
    shift: "morning"
    

})

