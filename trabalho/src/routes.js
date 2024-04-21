import LoginC from './components/LoginC.vue'
import LoginG from './components/LoginG.vue'
import LoginE from './components/LoginE.vue'
import EscolhaPosto from './components/EscolhaPosto.vue'
import Serviço from './components/Serviço.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name:'Serviço',
        component:Serviço,
        path:'/serviço-atribuido-combustao/serviço'
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