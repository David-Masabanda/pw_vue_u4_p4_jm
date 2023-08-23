import axios from "axios"

export const obtenerEstudianteFachada = async (cedula) => {
    console.log("AXIOS")
    return await obtenerEstudianteAPIAxios(cedula);

}

export const ingresarEstudianteFachada = (bodyEstudiante) => {
    console.log("AXIOS")
    ingresarEstudianteAPIAxios(bodyEstudiante);
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudianteAPIAxios(bodyEstudiante, id);
}

export const eliminarEstudianteFachada = (id) => {
    eliminarEstudianteAPIAxios(id);
}

export const eliminarPresentarEstudianteFachada = (id) => {
    eliminarPresentarEstudiante(id);
}



export const obtenerEstudianteAPI = async (cedula) => {

    const data = await fetch(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}




const obtenerEstudianteAPIAxios = async (cedula) => {
    //En el config van todos los datos de la cabecera
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXZpZCIsImlhdCI6MTY5Mjc0ODkwOCwiZXhwIjoxNjkyNzU4OTA4fQ.84Bae4gbaTN_ASfUDuqyLHcnYXU_n8T125CeH-DCFMvqeRtB2Zkw1O7SA_JUB4eZEYFbF-y1WEEZEtCG4nP9Rw",
        "Mensaje": "Valor1"
    }
    console.log("AXIOS 2")
    const data = axios.get(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`, { headers: headers}).then(r => r.data);
    console.log(data);
    return data;
}

const ingresarEstudianteAPIAxios = (bodyEstudiante) => {
    //En el config van todos los datos de la cabecera
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXZpZCIsImlhdCI6MTY5Mjc0ODkwOCwiZXhwIjoxNjkyNzU4OTA4fQ.84Bae4gbaTN_ASfUDuqyLHcnYXU_n8T125CeH-DCFMvqeRtB2Zkw1O7SA_JUB4eZEYFbF-y1WEEZEtCG4nP9Rw",
        "Mensaje": "Valor1"
    }
    console.log("AXIOS Guardar")
    axios.post(`http://localhost:8081/API/v1.0/Matricula/estudiantes`, bodyEstudiante,{headers: headers}).then(r => r.data)
}

const actualizarEstudianteAPIAxios = (bodyEstudiante, id) => {
    //En el config van todos los datos de la cabecera
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXZpZCIsImlhdCI6MTY5Mjc0ODkwOCwiZXhwIjoxNjkyNzU4OTA4fQ.84Bae4gbaTN_ASfUDuqyLHcnYXU_n8T125CeH-DCFMvqeRtB2Zkw1O7SA_JUB4eZEYFbF-y1WEEZEtCG4nP9Rw",
        "Mensaje": "Valor1"
    }
    console.log("AXIOS Actualizar")
    axios.put(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante,{headers: headers}).then(r => r.data)
}

const eliminarEstudianteAPIAxios = (id) => {
    //En el config van todos los datos de la cabecera
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXZpZCIsImlhdCI6MTY5Mjc0ODkwOCwiZXhwIjoxNjkyNzU4OTA4fQ.84Bae4gbaTN_ASfUDuqyLHcnYXU_n8T125CeH-DCFMvqeRtB2Zkw1O7SA_JUB4eZEYFbF-y1WEEZEtCG4nP9Rw",
        "Mensaje": "Valor1"
    }
    console.log("AXIOS Eliminar")
    axios.delete(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`,{headers: headers}).then(r => r.data);
}

const eliminarPresentarEstudiante = async (id) => {
    console.log("AXIOS Eliminar Presentar")
    const data = axios.delete(`http://localhost:8081/API/v1.0/Matricula/estudiantes/eliminar/${id}`).then(r => r.data);
    console.log(data);
}