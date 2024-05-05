<template>
    <div>
        <div class="alert alert-info">
            <p>{{ myEmployee.name }}</p>
        </div>
        <div v-for="e in Employees" :key="e.name">
            <p >
                   {{ e.name }} 
            </p>
        </div>
    </div>
</template>
<script>
import employeeMixin from '@/Mixins/employeeMixin'
export default {
    mixins:[employeeMixin],
    data() {
        return {
            myEmployee:{}
        }
    },
    methods: {

    },
    components: {
        
    },
    computed: {
        
    },
    mounted(){
        if(this.$route.params.id){
            console.log(this.$route.params.id)
          this.myEmployee =  this.Employees.filter(e=>e.id==this.$route.params.id)[0]
          console.log(this.myEmployee)
        }
        
    }

}
</script>