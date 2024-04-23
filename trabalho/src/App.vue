
<script>
import EscolhaPosto from './components/EscolhaPosto.vue';
import LoginC from './components/LoginC.vue';
import LoginG from './components/LoginG.vue';
import LoginE from './components/LoginE.vue';
import ServiçoEspera from './components/ServiçoEspera.vue'
import ServiçoAgendada from './components/ServiçoAgendada.vue'
import DetalhesServiço from './components/DetalhesServiço.vue'

export default {
  components: {
    EscolhaPosto,
    LoginC,
    LoginG,
    LoginE,
    ServiçoEspera,
    ServiçoAgendada,
    DetalhesServiço

  }
}
</script>

<template>
<router-view></router-view>
</template>