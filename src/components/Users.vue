<template lang="html">
  <div class="container">
      <h1><span>{{users.length}}</span> Github users</h1>
      <input type="text" v-model="search" placeholder="Szukaj..." class="input" v-validate="'min:5'" name="search" />
      <div id="users">
        <div v-for="user in filteredUsers">
          {{user.count}}
          <a :href="user.html_url" target="_blank" class="header">
            <div class="">
              <img :src="user.avatar_url" alt="">
            </div>
            <div class="right">
              <img src="../icon2.png" alt="" class="icon">
              <p> {{user.login}}</p>
            </div>
          </a>
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
    },
  },
}
</script>

<style lang="scss" scoped>
  $tablet: "(min-width: 768px)";
  $tablets-desktop: "(min-width: 992px)";
  $desktop: "(min-width:1200px)";


  .container{
    h1{
      text-align: center;
      font-size: 20px;
      span{
        font-weight: bold;
        font-size: 25px;
      }
    }
    input[type="text"]{
      width:100%;
      margin-top:15px;
      padding:5px;
      font-size:10px;
      border: 0;
      outline: 0;
      border-bottom: 1px solid #ddd;
      -webkit-transition: all 0.30s ease-in-out;
      -moz-transition: all 0.30s ease-in-out;
      -ms-transition: all 0.30s ease-in-out;
      -o-transition: all 0.30s ease-in-out;

      &:focus {
         border-bottom: 1px solid rgba(81, 203, 238, 1);
         font-weight: bold;
       }
       @media #{$tablet} {
         font-size:14px;
         padding:5px;
       }
    }
    #users{
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 20px;
      // width:100%;

      @media #{$tablet} {
        grid-template-columns: repeat(2,1fr);
        width:100%;
      }
      @media #{$tablets-desktop} {
        grid-template-columns: repeat(3,1fr);
        width:100%;
      }
      @media #{desktop} {
        grid-template-columns: repeat(4,1fr);
        width:100%;
      }

      .header{
        border: 1px solid #eee;
        border-radius: 20px;
        display: grid;
        grid-template-columns: auto 1fr;
        font-size: 20px;
        margin-top:20px;
        text-decoration: none;
        color: #000;
        @media #{$tablet} {
          &:hover{
            transform: scale(1.1);
            box-shadow: 1px 1px 2px 2px #ddd;
          }
        }
        div{
          img{
            width:100px;
            border-radius: 20px;
            position: relative;
            top:13px;
            left:5px;
            &.icon{
              width:25px;
            }
          }
          &:nth-child(2){
             align-self: center;
             margin-top:10px;
             padding:10px;
          }
        }
      }
    }
  }
</style>
