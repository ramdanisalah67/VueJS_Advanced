<template>
    <div>
        <div class="data">
            <p>{{ printA }}</p>
            <p>{{ printB }}</p>

            <button @click="a++">incremenetA</button>
            <button @click="b++">incremenetB</button>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
          a: 0  ,
          b: 0  

        }
    },
    methods: {
      
    },
    components: {
        
    },
    computed: {
        printA(){
          
          console.log("print1")
          return this.a ;
      },
      printB(){

          console.log("print2")
          return this.b;
      }
    }
}
</script>