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
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}




const obtenerEstudianteAPIAxios = async (cedula) => {
    console.log("AXIOS 2")
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.data);
    console.log(data);
    return data;
}

const ingresarEstudianteAPIAxios = (bodyEstudiante) => {
    console.log("AXIOS Guardar")
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, bodyEstudiante).then(r => r.data)
}

const actualizarEstudianteAPIAxios = (bodyEstudiante, id) => {
    console.log("AXIOS Actualizar")
    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante).then(r => r.data)
}

const eliminarEstudianteAPIAxios = (id) => {
    console.log("AXIOS Eliminar")
    axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data);
}

const eliminarPresentarEstudiante = async (id) => {
    console.log("AXIOS Eliminar Presentar")
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/eliminar/${id}`).then(r => r.data);
    console.log(data);
    return data;

}