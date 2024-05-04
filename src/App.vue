<script>
import { RouterView } from 'vue-router';
import Navbar from '@/components/NavbarMain.vue';

export default{
  components: {
    RouterView, Navbar,
  },
}
</script>

<template>
  <Navbar>
    <template #main>
      <RouterView />
    </template>
  </Navbar>

</template>
