import ServiçoAtribuidoC from './components/ServiçoAtribuidoC.vue'
import ServiçoAtribuidoG from './components/ServiçoAtribuidoG.vue'
import ServiçoAtribuidoE from './components/ServiçoAtribuidoE.vue'
import EscolhaPosto from './components/EscolhaPosto.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name:'ServiçoAtribuidoC',
        component:ServiçoAtribuidoC,
        path:'/serviço-atribuido-combustao'
    },
    {
        name:'ServiçoAtribuidoG',
        component:ServiçoAtribuidoG,
        path:'/serviço-atribuido-geral'
    },
    {
        name:'ServiçoAtribuidoE',
        component:ServiçoAtribuidoE,
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