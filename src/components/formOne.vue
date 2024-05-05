<template>
    <div class="body">
   
        <div class="parent" @click="changeEvent">
            <form v-blockSubmit>
                <p ><label>e-Mail</label><input :class="A" @mouseup="change('1')" type="text"><span class="email"><i class="fa-solid fa-envelope"></i></span></p>
                <p><label>password</label><input :class="B" @mouseup="change('2')" type="password"> <span class="password"><i class="fa-solid fa-key"></i></span></p>
                <p> 

                    <button class="btn btn-light" @click="login">Connect</button>
                </p>
            </form>
          
        </div>
    </div>
</template>
<script>
export default {

    directives: {
        sizeInput(el,order){
            el.style.fontSize = order.value +"px"
        }
    },
    data() {
        return {
            A:"",
            B:""
        }
    },
    methods: {
        login(){
            localStorage.setItem("loggedIn",true)
            this.$emit("loggedIn",true)
        },
        changeEvent() {
            document.addEventListener('click', this.handleClickOutside);
     },
        change(inp){
            if(inp === '1')  {this.A="one";this.B="zero"  }    
            if(inp === '2')  {this.A="zero";this.B="one"  }   

        },
        handleClickOutside(event) {
            if (!event.target.closest('input')) {

                    this.A="zero" ;
                    this.B="zero" ;

                }
    }
    },
    components: {
        
    },
    computed: {
        
    }
}
</script>
<style scoped>
.parent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: black;
}
p{
    display: flex;
    flex-direction: column;
    position: relative;
}
form {
    border-radius: 25px;
    width: 360px;
    height: 270px;
    background: rgba(90, 123, 133, 0.753);
    padding: 20px;
    
}
form input {
    height: 40px;
    outline: 0px;
}

.zero {
    outline: 0px;
}

.one {
    outline: 2px solid black

}

.password{
    position: absolute;
    top: 40px;
    right: 12px;
}
.email{
    position: absolute;
    top: 40px;
    right: 12px;
}
i:hover{
    cursor: pointer;
    color:blue
}
label {
    color: white;
    margin-bottom: 9px;
}
</style>