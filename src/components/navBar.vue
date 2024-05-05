<template>
    <div class="body">
        <div class="parent">
            <button @click="$event=>$router.push({name:'login'})" v-if="!isAuthenticated">connexion</button>
            <button @click="logout" v-if="isAuthenticated">logout</button>

            <button @click="toRegister">register</button>
            <button @click="check">test</button>
            <div class="nav">
                <ul>
                    <li v-for="r in myRoutes"  :key="r.name">
                        <router-link :to="r.path">{{ r.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
    "loggedIn"
    
],
    data() {
        return {
            myRoutes:[],
            isAuthenticated:false
        }
    },
    methods: {
        logout(){
            localStorage.clear();
            this.isAuthenticated=false
            this.$emit("loggedOut")
        },
        toRegister(){
            this.$router.push("register")
        },
        check(){
            console.log(this.loggedIn)
        }
    },
    components: {
        
    },
    computed: {
        
    },
   mounted(){
    this.myRoutes=this.$router.options.routes.filter(e=>e.meta && e.meta.include == true);
    console.log(this.myRoutes)
    if(localStorage.getItem("loggedIn")){
        this.isAuthenticated=true;
    }
   },
   watch: {
    loggedIn(newVal,oldVal){
       console.log("new =>",newVal)
       console.log("old =>",oldVal)
       if(localStorage.getItem("loggedIn")){
        this.isAuthenticated = true;
        }
        else {
            this.isAuthenticated = false
        }
    },
   }
}
</script>
<style>



.body .parent {
    width: 15%;
    background: burlywood;
    height: 50px;
    display: flex;
    justify-content: space-around;
}

.body .parent button {
    flex-grow: 1;
    
}

.body .parent button:nth-child(1){
    background: white;
}
.body .parent button:nth-child(2){
    background: black;
    color:white
}
</style>