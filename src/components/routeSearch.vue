<template>
    <div>
        <div class="searchContent w-25 mx-auto">
            <p>route</p><input type="text" class="form-control" v-model="route"><br>
            <p><button class="btn btn-dark" @click="searchRoute">search</button></p>
        </div>
        <div class="alert alert-secondary" v-if="routeFound.path != ''">
            <p>name => {{ routeFound.name }}</p>
            <p>link => {{ routeFound.path }}</p>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            routeFound: {
                path:"",
                name:"",
            },
            route: "" ,
        }
    },
    methods: {
        searchRoute(){
            if(this.$router.hasRoute(this.route)){
                console.log("route found !!!")
                console.log(this.$router.options.routes.filter(e=>e.name == this.route))
                this.routeFound = this.$router.options.routes.filter(e=>e.name == this.route)[0]
                console.log(this.routeFound)
            }
            else {
                console.log("route not found ---")
            }
        }
    },
    components: {
        
    },
    computed: {
        
    }
}
</script>