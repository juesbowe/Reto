const proControl = {};
const db=require('./dataBase.js');


proControl.getProfesores = (req,res)=>res.json(db.profesores);
proControl.getProfesoresP = (req,res)=>res.json(db.practica);
proControl.getProfesoresC = (req,res)=>res.json(db.coordinador);
module.exports = proControl;
