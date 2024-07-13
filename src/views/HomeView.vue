<template>
  <div class="home">

 <DataFetch/>
  </div>
</template>

<script>
import DataFetch from '@/components/AllUsers.vue'

export default {
  name: 'HomeView',
  components: {
    DataFetch

  }
}
</script>
