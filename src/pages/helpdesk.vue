<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Ajuda</h5>
    <p></p>
    <p>Clica no botão “Obter Ajuda” para se direcionar ao formulário</p>
    <q-btn
      color="primary"
      label="Obter Ajuda"
      @click="mostrarAjuda"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AjudaPage',
  methods: {
    mostrarAjuda() {
      // Redirecionar para a página "what.vue" (certifique-se de configurar suas rotas corretamente)
      this.$router.push('/form-helpdesk')
    }
  }
})
</script>
