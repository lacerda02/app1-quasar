

<template>
  <q-page>
    <q-page-container>
      <div class="q-pa-md">
        <h2 class="text-h6">Login</h2>

        <q-form @submit="login">
          <q-input
            v-model="username"
            label="Nome de Usuário"
            dense
          />

          <q-input
            v-model="password"
            label="Senha"
            type="password"
            dense
          />

          <q-btn
            type="submit"
            label="Login"
            color="primary"
            class="q-mt-md"
          />
        </q-form>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Simulação de lógica de autenticação (substitua por sua própria lógica)
      if (this.username === 'seu_usuario' && this.password === 'sua_senha') {
        // Login bem-sucedido, redirecione para a próxima página
        this.$router.push('/dashboard'); // Certifique-se de configurar a rota para o painel de controle
      } else {
        // Exiba uma mensagem de erro, login inválido
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Credenciais inválidas',
        });
      }
    },
  },
};
</script>
