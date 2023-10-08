import React, {useState} from "react";
import '../css/Lista-tareas.css'
import Tarea from "./Tarea";
import TareaFormulario from "./Tarea-formulario";

function ListaTareas(){
    const [tareas, setTareas] = useState([])
    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            console.log(tareas);
        };
    }
    const eliminarTarea = id => {
        const tareaActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareaActualizadas);
    }
    const completarTarea = id => {
        const tareaActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareaActualizadas);
    }
    return(
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea)=>
                        <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
};

export default ListaTareas; 