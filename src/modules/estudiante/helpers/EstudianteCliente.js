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
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXZpZCIsImlhdCI6MTY5Mjc0OTY4NiwiZXhwIjoxNjkyNzU5Njg2fQ.Vw13VU9yLEhyrpdUIwzV00Du5oeodxE-MSVmC-6qw7NyBixZp9jM6aZ8oYa49CVOWId1jVhM21d4qnCRjEmeSQ",
        "Mensaje": "Valor1"
    }
    console.log("AXIOS 2")
    const data = axios.get(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`,{headers: headers}).then(r => r.data);
    console.log(data);
    return data;
}

const ingresarEstudianteAPIAxios = (bodyEstudiante) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXZpZCIsImlhdCI6MTY5Mjc0OTY4NiwiZXhwIjoxNjkyNzU5Njg2fQ.Vw13VU9yLEhyrpdUIwzV00Du5oeodxE-MSVmC-6qw7NyBixZp9jM6aZ8oYa49CVOWId1jVhM21d4qnCRjEmeSQ",
        "Mensaje": "Valor1"
    }
    console.log("AXIOS Guardar")
    axios.post(`http://localhost:8081/API/v1.0/Matricula/estudiantes`, bodyEstudiante,{headers: headers}).then(r => r.data)
}

const actualizarEstudianteAPIAxios = (bodyEstudiante, id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXZpZCIsImlhdCI6MTY5Mjc0OTY4NiwiZXhwIjoxNjkyNzU5Njg2fQ.Vw13VU9yLEhyrpdUIwzV00Du5oeodxE-MSVmC-6qw7NyBixZp9jM6aZ8oYa49CVOWId1jVhM21d4qnCRjEmeSQ",
        "Mensaje": "Valor1"
    }
    console.log("AXIOS Actualizar")
    axios.put(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante,{headers: headers}).then(r => r.data)
}

const eliminarEstudianteAPIAxios = (id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXZpZCIsImlhdCI6MTY5Mjc0OTY4NiwiZXhwIjoxNjkyNzU5Njg2fQ.Vw13VU9yLEhyrpdUIwzV00Du5oeodxE-MSVmC-6qw7NyBixZp9jM6aZ8oYa49CVOWId1jVhM21d4qnCRjEmeSQ",
        "Mensaje": "Valor1"
    }
    console.log("AXIOS Eliminar")
    axios.delete(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`,{headers: headers}).then(r => r.data);
}






const eliminarPresentarEstudiante = async (id) => {
    console.log("AXIOS Eliminar Presentar")
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/eliminar/${id}`).then(r => r.data);
    console.log(data);
    return data;

}