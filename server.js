const express = require('express')
const bodyParser = require('body-parser')
const {alumno, Curso} = require('./mongooseClient')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//CRUD
app.post('/devf/api/v1/alumno', (req, res)=>{
  const json = req.body
  const nuevoAlumno = alumno(json)
  nuevoAlumno.save((error, alumno)=>{
    err
    ? res.status(409).send(err)
    : res.status(201).send(alumno)
    // Response.status(201).send({
    //   "body" : alumno
    // })
  })
})

//GETALL
app.get('/devf/api/v1/alumnos', (req, res)=>{
  alumno.find().populate('cursos').exec().then(alumnos => {
    res.status(200).send(alumnos)
  })
  .catch(error => res.status(404).send(error))
})

//GET BY ID
app.get('/devf/api/v1/alumnos:id', (req, res)=>{
  const alumnoId = req.params.id 

  .findById(alumnoId)
  .alumno.find()
  .populate('cursos')
  .exec()
    .then(alumnos => {
    res.status(200).send(alumnos)
  })
  .catch(error => res.status(404).send(error))
})

//UPDATE
add.put('/devf/api/v1/alumno/:id', (req, res)=>{
  const alumnoId = rep.params.id;

  alumno
    .findByIdandUpdate(
      alumnoId,
      {$Set : req.body},
      {new : true}
    )
    .populate('cursos')
    .exec()
    .then(alumno => {
      res.status(200).send(alumnos)
    })
})
add.post('/devf/api/v1/alumno/:id', (req, res)=>{
  const alumnoId = rep.params.id;

  alumno
    .findByIdandUpdate(
      alumnoId,
      {$Set : req.body},
      {new : true}
    )
    .populate('cursos')
    .exec()
    .then(alumnopost => {
      res.status(200).send(alumnopost)
    })
})
//DELETE
add.delete('/devf/api/v1/alumno/:id', (req, res)=>{
  const alumnoId = rep.params.id;

  alumno
    .findByIdandUpdate(
      alumnoId,
      {$Set : req.body},
      {new : true}
    )
    .exec()
    .then(alumnoEliminado => {
      message : "alumno borrado exitosamente"
    })
})
//CURSOS
add.post('/devf/api/v1/cursos', (req, res)=>{
  const json = req.body
  const nuevoCurso = Curso()

  nuevoCurso.save((err, curso){
    err
    ? res.status(409).send(err)
    : res.status(201).send(alumno)
  })
})
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`server on port : ${PORT}`)
