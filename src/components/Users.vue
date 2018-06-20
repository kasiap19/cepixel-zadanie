<template lang="html">
  <div class="">
      <h1>Github users:</h1>
      <input type="text" v-model="search" placeholder="Szukaj..." class="search" v-validate="'min:5'" name="search" />
      <div id="users">
        <div v-for="user in filteredUsers">
          <div class="header" >
              <a :href="user.html_url" target="_blank">
                <div class="">
                  <img :src="user.avatar_url" alt="">
                  <p>{{user.login}}</p>
                </div>
                  <div class="bottom">
                    <img src="../icon.png" alt="" class="icon">
                  </div>
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
      // console.log(data);
    })
  },
  computed:{
    filteredUsers: function(users){
      return this.users.filter((users) => {
        return users.login.toLowerCase().includes(this.search.toLowerCase())
      });
    }
  },
}
</script>

<style lang="scss" scoped>
input[type="text"]{
  border: 2px solid #fff;
  border-bottom: 1px solid #bbb;
  padding: 20px;
  width:50%;
  margin-bottom: 20px;

  &:focus {
    outline-width: 0;
    + & .input-highlight{
      border-bottom: 3px solid red;
    }
  }

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
    transition: transform .2s;
    div{
      align-self: center;
    }

    a{
      text-decoration: none;
      font-size: 20px;
      font-weight: 400;
      color: black;
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

    &:hover{
      transform: scale(1.1);
      box-shadow: 1px 1px 2px 2px #ddd;

    }
    .bottom{
      img{
        width:40px;
        float: right;
      }
    }
  }
}
</style>
