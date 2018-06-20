<template lang="html">
  <div class="">
    <input type="text" v-model="search" placeholder="Szukaj..." class="search">

  <div id="users">
    <div v-for="user in filteredUsers ">
      <div class="header">
        <div class="">
          <img :src="user.avatar_url" alt="">
          <p>{{user.login}}</p>
        </div>
      </div>
      <div class="bottom">
          <a :href="user.html_url" target="_blank">
            <img src="../icon.png" alt="" class="icon">
          </a>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      users: [],
      search: ''
    }
  },
  mounted(){
    fetch("https://api.github.com/users?since=135")
    .then(response => response.json())
    .then((data) => {
      this.users = data;
      console.log(data);
    })
  },
  computed:{
    filteredUsers: function(){
      return this.users.filter((user) => {
        return user.login.match(this.search)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
input[type="text"]{
  border: 2px solid #fff;
  border-bottom: 1px solid #bbb;
  padding: 20px;
  width:50%;
  margin-bottom: 20px;

}
#users{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  height:100px;
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


    p {
      font-size: 20px;
      font-weight: 400;
      padding:20px;
      margin-right:-40px;
    }

    img{
      width:100px;
      height:auto;
      align-self: center;
      border-radius: 80px;
      float: left;
    }
  }

    .bottom{
      a{
        text-decoration: none;
        color: black;
        font-weight: bold;
        padding: 10px;
        // background-color: #EEEEEE;
        border-radius: 10px;
        position: relative;
        top:-35px;
        // width:50px;
        float: right;
        // border: 1px solid #ddd;
        background: white;

          &:hover{
            background-color: black;
            height:40px;
          }
        }
        .icon{
          width:40px;
        }
    }
}
</style>
