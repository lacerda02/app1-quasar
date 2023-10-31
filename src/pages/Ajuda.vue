<template>
  <q-page class="q-pa-lg">
     <h5 class="q-mt-none">Ajuda</h5>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi ipsum debitis a atque incidunt, voluptatibus odit doloremque cumque, quibusdam repellendus deleniti placeat voluptatem facere reprehenderit accusamus necessitatibus voluptate! Non?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus minima, animi quaerat saepe, ratione voluptatum consectetur ipsam vitae temporibus sapiente optio dolor sint in doloribus accusantium nulla? Accusantium, quisquam?</p>


  </q-page>


</template>

<script>
import { ref } from 'vue'

export default {
  name: 'IndexPage',
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}



</script>
