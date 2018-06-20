<template lang="html">
  <div id="users">
    <div v-for="user in users">
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
