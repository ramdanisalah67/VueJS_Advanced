<template>
    <div>
        <div class="searchContent w-25 mx-auto">
            <p>ID</p><input type="text" class="form-control" v-model="id"><br>
            <p><button class="btn btn-dark" @click="search">search</button></p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id:""
        }
    },
    methods: {
        search(){
            this.$router.push('/employees/'+this.id)
        } 
    },
    components: {
        
    },
    computed: {
        
    }
}
</script>