
<script>
import EscolhaPosto from './components/EscolhaPosto.vue';
import LoginC from './components/LoginC.vue';
import LoginG from './components/LoginG.vue';
import LoginE from './components/LoginE.vue';
import Serviço from './components/Serviço.vue'

export default {
  components: {
    EscolhaPosto,
    LoginC,
    LoginG,
    LoginE,
    Serviço
  }
}
</script>

<template>
<router-view></router-view>
</template>