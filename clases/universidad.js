const { Estudiante } = require("./estudiante");


class Universidad{

    
    
    constructor(){
        //esto es una instancia de la clase estudiante
        this.estudiante= new Estudiante();
        //hacemos una instancia de cursos
    }


    //logica del estudiante
    registrarEstudiante=(estudiante)=>{
        return this.estudiante.agregar(estudiante);
    }
    actualizarEstudiante=(estudiante)=>{
        return this.estudiante.actualizar(estudiante.id,estudiante);
    }
    eliminarEstudiante=(estudiante)=>{
        return this.estudiante.eliminar(estudiante.id);
    }
    consultarEstudiante=(estudiante)=>{
        return this.estudiante.consultarUno(estudiante.id);
    }
    
    consultarEstudiantes=()=>{
        return this.estudiante.consultarTodos();
    }

    //hacerla logica de cursos

    // hacer los reportes
    totalEstudiantes =()=>{//cantidad de estudiantes  registrados en la universidad
        return this.estudiante.total();
    }
    //funciones de flecha
    total_cursos =()=>{//cantidad de cursos
        return this.cursos.length;
    }

}
module.exports={
    Universidad
}