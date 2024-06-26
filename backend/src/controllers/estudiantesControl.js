const estControl = {};
const db=require('./dataBase.js');


estControl.getEstudiantes = (req,res)=>res.json(db.estudiantes);



estControl.postEstudiante = (req,res)=>{
    const {id, nombre,apellido} = req.body;
    if(!id || !nombre || !apellido){
        res.status(400).send("Datos incompletos {id, nombre, apellido}");
        return;
    }
    const estudiante = {
        id,
        nombre,
        apellido
    }
    db.estudiantes.push(estudiante);
    db.updateDB();
    res.send('Estudiante ingresado con éxito');
}
estControl.getEstudiante = (req,res)=>{
    const estudiante = db.estudiantes.find(
        (est)=>est.id == req.params.id
    );

    res.json(estudiante);
}



estControl.putEstudiante = (req,res)=>{
    const {nombre,apellido} = req.body;

    if(!nombre || !apellido){
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }
    const estudiante = db.estudiantes.find(
        (est)=>est.id == req.params.id
    );
    estudiante.nombre = nombre;
    estudiante.apellido = apellido;
    db.updateDB();
    res.send('Estudiante actualizado');
}

estControl.deleteEstudiante = (req,res)=>{
    const index = db.estudiantes.findIndex(
        (est)=>est.id == req.params.id
    );
    if(index < 0){
        res.status(400).send("Id de estudiante no encontrado");
        return;
    }
    db.estudiantes.splice(index,1);
    db.updateDB();
    res.send('Estudiante eliminado');
}


module.exports = estControl;
