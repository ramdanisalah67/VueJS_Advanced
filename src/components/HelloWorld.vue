<template>
  <div>
    welcome {{username  }}
    <button class="btn btn-dark" @click="print">click</button>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      username:this.user.fullName
    }
  },
  methods: {
    print(){
      console.log(this.user.fullName)
    }
  },
  components: {
    
  },
  computed: {
    
  },
  mounted(){
    console.log("ru")
    console.log(this.user)
  }
}
</script>