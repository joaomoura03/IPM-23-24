
<script>
import EscolhaPosto from './components/EscolhaPosto.vue';
import ServiçoAtribuidoC from './components/ServiçoAtribuidoC.vue';
import ServiçoAtribuidoG from './components/ServiçoAtribuidoG.vue';
import ServiçoAtribuidoE from './components/ServiçoAtribuidoE.vue';

export default {
  components: {
    EscolhaPosto,
    ServiçoAtribuidoC,
    ServiçoAtribuidoG,
    ServiçoAtribuidoE
  }
}
</script>

<template>
<router-view></router-view>
</template>