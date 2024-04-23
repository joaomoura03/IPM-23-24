import LoginC from './components/LoginC.vue'
import LoginG from './components/LoginG.vue'
import LoginE from './components/LoginE.vue'
import EscolhaPosto from './components/EscolhaPosto.vue'
import ServiçoEspera from './components/ServiçoEspera.vue'
import ServiçoAgendada from './components/ServiçoAgendada.vue'
import DetalhesServiço from './components/DetalhesServiço.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name:'DetalhesServiço',
        component:DetalhesServiço,
        path:'/serviço-atribuido-combustao/detalhes/:id',
        props: true
    },
    {
        name:'ServiçoAgendada',
        component:ServiçoAgendada,
        path:'/serviço-atribuido-combustao/serviço-agendada'
    },
    {
        name:'ServiçoEspera',
        component:ServiçoEspera,
        path:'/serviço-atribuido-combustao/serviço-espera'
    },
    {
        name:'LoginC',
        component:LoginC,
        path:'/serviço-atribuido-combustao'
    },
    {
        name:'LoginG',
        component:LoginG,
        path:'/serviço-atribuido-geral'
    },
    {
        name:'LoginE',
        component:LoginE,
        path:'/serviço-atribuido-eletrico'
    },
    {
        name:'EscolhaPosto',
        component:EscolhaPosto,
        path:'/'
    }
];

const router =createRouter({
    history:createWebHistory(),
    routes,
});

export default router