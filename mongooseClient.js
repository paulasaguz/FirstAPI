const mongoose = require('mongoose')

const URL = 'mongodb://Paula:2tintincamisazul@ds161630.mlab.com:61630/devf'
mongoose.connect(URL,{useNewUrlParser: true}, ()=>{
  console.log('conexion exitosa')
})

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.objectId

const alumnoSchema = Schema ({
  alumno: objectId,
  nombre : String,
  apellido : String,
  edad :  {type : Number},
  genero : String,
  curso : {
    type : objectId,
    ref : "Curso"
  }
})

const cursoSchema = Schema({
  curso :  objectId,
  nombre : String,
  descripcion : String,
  precio : Number
})

const alumno = mongoose.model('alumno', alumnoSchema)
const Curso = mongoose.model('curso', cursoSchema)

module.exports = {alumno, Curso}
