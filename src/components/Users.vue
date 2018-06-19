<template lang="html">
  <div id="users">
    <div v-for="user in users">
      <div class="header">
          <img :src="user.avatar_url" alt="" />
        </div>
        <div class="">
          <h4>{{user.login}}</h4>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      users: []
    }
  },
  mounted(){
    fetch("https://api.github.com/users?since=135")
    .then(response => response.json())
    .then((data) => {
      this.users = data;
      console.log(data);
    })
  }
}
</script>

<style lang="scss" scoped>
#users{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;

  .header{
    margin-top:20px;
    // border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr auto;
    overflow: auto;
    height:500px;
    margin:0 auto;
    box-shadow: -60px 0px 100px -90px #ddd, 60px 0px 100px -90px #ddd;

    h4{
      text-align: left;
    }

    img{
      margin-top:50px;
      width:100px;
      justify-self: center;
      border-radius: 50px;
    }
  }
}
</style>
