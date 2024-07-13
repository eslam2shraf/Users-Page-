<template>
  <div>
    <h1>All System Users</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="user-list">
      <User v-for="user in data" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import User from "./User.vue";

export default {
  data() {
    return {
      data: [],
      loading: true,
      error: null,
    };
  },
  components: {
    User,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.data = response.data;
      } catch (error) {
        this.error = "Failed to load data";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #1d37ca;
}

.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background: #f4f4f4;
}
</style>
