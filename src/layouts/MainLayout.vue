<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h4">Madina</div>
        <div class="text-subtitle1">{{todasDatas}}</div>
      </div>
      <q-img
      src="../assets/img/fundo.jpg"
      class="header-image absolute-top"
      />
    </q-header>
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
        side="left"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
            to="/"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Atividades
              </q-item-section>
            </q-item>


            <q-item
              to="/Galeria"
              exact
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="image" />
              </q-item-section>

              <q-item-section>
                Galeria
              </q-item-section>
            </q-item>

            <q-item
              to="/helpdesk"
              exact
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Central de Ajuda
              </q-item-section>
            </q-item>
            <q-item
              to="/Login"
              exact
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>

              <q-item-section>
                Login
              </q-item-section>
            </q-item>



          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/img/fundo.jpg" style="height: 150px" >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https:\/\/2.gravatar.com\/avatar\/ae393521f21c56ec5fe3a78a3c8c8e74">
            </q-avatar>
            <div class="text-weight-bold">Leonardo Luís</div>
            <div>@Leonardo Luís</div>
          </div>
        </q-img>
      </q-drawer>


    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>

    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MainLayout',

  data() {
    return {
      leftDrawerOpen: false,
      dataFormatada: '',
    }
  },
  computed: {
    todasDatas() {
      return this.dataFormatada;
    }
  },
  created() {
    // Inicialize a data formatada
    this.atualizarData();

    // Configurar um intervalo para atualizar a data a cada segundo
    setInterval(this.atualizarData, 1000);
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    atualizarData() {
      const hoje = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      
      };
      this.dataFormatada = hoje.toLocaleDateString('pt-BR', options);
    },
  },
};
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>


