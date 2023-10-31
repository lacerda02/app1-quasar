<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Preencha os campos para te ajudarmos </h5>
    <form @submit.prevent="enviarAjuda">
      <q-input
        label="Nome"
        v-model="nome"
      />
      <q-input
        label="Contato"
        v-model="contato"
      />
      <q-input
        label="Email"
        v-model="email"
        type="email"
      />
      <q-input
        label="Assunto"
        v-model="Assunto"
      />
      <q-input
        label="Mensagem de Ajuda"
        v-model="mensagem"
        type="textarea"
        aria-required="false"
      />
      <q-btn
        color="primary"
        label="Enviar Ajuda"
        type="submit"
      />
    </form>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  name: 'AjudaPage',
  data() {
    return {
      nome: '',
      contato: '',
      email: '',
      Assunto: '',
      mensagem: ''
    };
  },
  methods: {
    enviarAjuda() {
      const mensagemFormatada = `Olá, meu nome é ${this.nome}. Meu contato é ${this.contato}. Meu email é ${this.email}. Assunto: ${this.Assunto}. Mensagem: ${this.mensagem}`;

      // Substitua o número de telefone pelo número do WhatsApp Business
      const numeroWhatsapp = '+25887331807';

      // Utilize uma API para enviar a mensagem para o WhatsApp
      axios.post('https://api.twilio.com/2010-04-01/Accounts/SEU_ACCOUNT_SID/Messages.json', {
        To: `whatsapp:${numeroWhatsapp}`,
        From: '+258847331807',
        Body: mensagemFormatada
      }, {
        auth: {
          username: 'SEU_ACCOUNT_SID',
          password: 'SEU_AUTH_TOKEN'
        }
      }).then(response => {
        console.log('Mensagem enviada com sucesso:', response.data);
      }).catch(error => {
        console.error('Erro ao enviar a mensagem:', error);
      });

      // Limpe os campos do formulário após o envio
      this.nome = '';
      this.contato = '';
      this.email = '';
      this.Assunto = '';
      this.mensagem = '';
    }
  }
})
</script>
