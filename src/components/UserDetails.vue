<template>
<div class="container">


  <div class="profile">
    <div class="profile-header">
      <img src="../assets/Blank.svg" alt="User Photo" class="profile-image" />
      <h1>{{ user?.name }}</h1>
      <h2>{{ user?.company.name }}</h2>
    </div>
    <div class="profile-details">
      <h3>Contact Information</h3>
      <p><strong>Address:</strong> {{ user?.address?.street }}, {{ user?.address?.city }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p>
      <p><strong>Phone:</strong> {{ user?.phone }}</p>
      <p><strong>Website:</strong> <a :href="'http://' + user?.website" target="_blank">{{ user?.website }}</a></p>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'; 

export default {
  name: 'UserDetails',
  data() {
    return {
      user: null,
      error: null, 
      loading: true,
    };
  },
  created() {
    const userId = this.$route.params.id;
    this.fetchUserData(userId);
  },
  methods: {
    async fetchUserData(userId) {
      this.loading = true;
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        this.user = response.data; 
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
.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile {
    display: flex;
    align-items: center;
    flex-direction: column;
  width: 600px;
  margin: auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.profile-header {
  margin-bottom: 20px;
}

.profile-image {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 2px solid #0e47b3;
}

h1 {
  margin: 10px 0;
  font-size: 24px;
  color: #2c3e50;
}

h2 {
  margin: 5px 0;
  font-size: 18px;
  color: #0e47b3;
}

.profile-details {
  text-align:center;
}

h3 {
  margin-bottom: 10px;
  font-size: 20px;
  color: #34495e;
}

p {
  margin: 5px 0;
  font-size: 16px;
  color: #7f8c8d;
}

a {
  color: #0e47b3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
