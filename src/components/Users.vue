<template lang="html">
  <div id="users">
    <div v-for="user in users">
      <div class="header">
        <div class="">
          <img :src="user.avatar_url" alt="">
          <p>{{user.login}}</p>
          <a href=""></a>
        </div>
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
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  // background-color: #757575;

  .header{
    margin-top:20px;
    border: 1px solid #eee;
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto;
    overflow: auto;
    background-color: white;
    padding:20px;

    div{
      align-self: center;

    }

    p{
      font-size:20px;
      // font-weight: bold;
    }

    img{
      width:100px;
      height:auto;
        align-self: center;
      border-radius: 80px;
      float: left;
    }
  }
}
</style>
