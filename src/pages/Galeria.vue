<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Nossas fotos</h5>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias itaque
      ipsum ipsam accusantium cum vero, velit, ipsa ad tempora deserunt
      provident porro culpa est sunt. Odio dolorem quaerat exercitationem sint.
    </p>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="../assets/img/1698745017881.jpg"
          style="width: 100%; height: 90%"
        />
        <q-carousel-slide
          :name="2"
          img-src="../assets/img/1698745017919.jpg"
          style="max-width: 100%; max-height: 100%"
        />
        <q-carousel-slide
          :name="3"
          img-src="../assets/img/1698745017910.jpg"
          style="max-width: 100%; max-height: 100%"
        />
        <q-carousel-slide
          :name="4"
          img-src="../assets/img/1698745017940.jpg"
          style="max-width: 100%; max-height: 100%; text-align: center"
        />
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "IndexPage",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
