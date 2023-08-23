import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: "/consultar",
        component: () => import('../modules/estudiante/pages/ConsultaEstudiante'),
    },

    {
        path: "/guardar",
        component: () => import('../modules/estudiante/pages/GuardarEstudiante'),
    },

    {
        path: "/actualizar",
        component: () => import('../modules/estudiante/pages/ActualizarEstudiante'),
    },
    {
        path: "/eliminar",
        component: () => import('../modules/estudiante/pages/EliminarEstudiante'),
    }
    ,
    {
        path: "/Responsive",
        component: () => import('../responsiveWeb/responsiveWeb'),
    }
    ,
    {
        path: "/MediaQuery",
        component: () => import('../responsiveWeb/responsiveMediaQ'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router