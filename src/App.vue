<template>
  <navBarVue :loggedIn="loggedIn" @loggedOut="logout" />
 <router-view @loggedIn="print" />
</template>

<script>
import navBarVue from './components/navBar.vue'

export default {
  provide(){
    return {
      profile: "Java Developer FullStack"
    }
  },
  name: 'App',
components: {
  navBarVue
},
data() {
  return {
    loggedIn: false
  }
},
methods: {
  print(){
    this.loggedIn = true;
    console.log("logged in !!")  ;
     console.log(this.loggedIn)
  },
  logout(){
  this.loggedIn=false;    
  }
},
}
</script>

<style>

</style>
