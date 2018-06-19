<template lang="html">
  <div>
    <li v-for="friend in friends"> {{friend.login}}</li>
  </div>
</template>

<script>
export default {
  data(){
    return {
      friends: []
    }
  },
  mounted(){
    fetch("https://api.github.com/users?since=135")
    .then(response => response.json())
    .then((data) => {
      this.friends = data;
      console.log(data);
    })
  }
}
</script>

<style lang="css">
</style>
