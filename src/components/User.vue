<template>
 <router-link :to="`/${user.id}`" class="user-card" >
    <img src="../assets/Blank.svg" alt="User Photo" class="profile-image" />
    <h2>{{ user?.name }}</h2>
    <h3>{{ user?.company.name }}</h3>
    <p>{{ user?.address.street }}, {{ user.address.city }}</p>
    <p>{{ user?.email }}</p>
    <p>{{ user?.phone }}</p>
    <p>{{ user?.website }}</p>
 </router-link>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: Object,
  },

};
</script>

<style scoped>
.user-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  width: 300px;
  text-decoration: none;
}
.user-card:hover {
  transform: translateY(-10px);
  border:1px solid #0e47b3;
}

.profile-image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

h2 {
  margin: 10px 0;
  font-size: 20px;
  color: #2c3e50;
}

h3 {
  margin: 5px 0;
  font-size: 16px;
  color: #0e47b3;
}

p {
  margin: 5px 0;
  font-size: 14px;
  color: #7f8c8d;
}
</style>
