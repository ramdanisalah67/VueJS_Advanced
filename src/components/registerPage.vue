<template>
    <div>
        <hello-world-vue :user="registredUser"/>
        <p v-changeColor="'green'">welcome to register page !! 

        </p>


      <!--  <div class="fa-3x">
                <i class="fa-regular fa-calendar-days fa-beat-fade"></i>
             </div>
       -->

        <div>
            <form  v-blockSubmit>
                <p>fullName</p><input v-model="registredUser.fullName" type="text" :class="f" @mouseenter="focuse('f')" @mouseleave="f=''">
                <p>email</p><input v-model="registredUser.email" type="text" :class="p" @mouseenter="focuse('p')">
                <p>phone number</p><input type="text" v-model="registredUser.phone" :class="p" @mouseenter="focuse('p')">
                <p>profile</p><input type="text" :class="p" v-model="registredUser.profile" @mouseenter="focuse('p')">

                <button class="btnr" @click="register"><div>Register</div><span></span></button>
            </form>
            <div class="data">
                <span class="sp1"></span>
                <span class="sp2"></span>

               <div class="fields">
                <div>fullName</div>
                <div>email</div>
                <div>phone</div>
                <div>profile</div>

               </div>
               <div class="values">
                <div>{{ registredUser.fullName }}</div>
                <div>{{ registredUser.email }}</div>
                <div>{{ registredUser.phone }}</div>
                <div>{{ registredUser.profile }}</div>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import HelloWorldVue from './HelloWorld.vue';
export default {

    data() {
        return {
          f: "",
          p: "",
          registredUser:{}
        }
    },
    methods: {
        focuse(r) {
            if(r === 'f'){
                this.f = "focused";
                this.p = "none-focused";
            }
            if(r == 'p'){
                this.f = "none-focused";
                this.p = "focused";
            }
        },
        register(){
        console.log(this.registredUser)
        }
    },
    components: {
        HelloWorldVue
    },
    computed: {
        
    }
}
</script>
<style scoped>

form {
    position: relative;
    left: 200px;
    top: 200px;
    background-color: black;
    width: 25%;
    height: 400px;
    padding-top: 15px;
    border-radius: 25px;
}

form input {
    width: 80%;
    height: 30px;
    position: relative;
    left: 20px;
    border: 0px;
    font-size: 17px;
    font-family: 'Courier New', Courier, monospace;
    outline: none;
}
.focused{
    outline: 2px solid rgb(71, 71, 117);
    
}
.none-focused{
    outline: 0px solid rgb(71, 71, 117);

}
form p{
    position: relative;
    left: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bolder;
    color: rgb(224, 205, 205);
}
.btnr{
    width: 120px;
    position: relative;
    height: 28px;
    top: 20px;
    left: 20px;  
    cursor: pointer;
    z-index: 0;
    outline: 0;
    border: 0;
    background: black;
    border: 1px solid white;
    color: white;
    transition: .3s;
    font-weight: bolder;

}
.btnr span{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    transition: .3s;
    background-color: rgb(255, 255, 255);
    z-index: -1;
    
}
.btnr:hover span {
    width: 100%;
    transition: .3s;
}
.btnr:hover {
    color:black;
    transition: .3s;

}
div {
    z-index: 10;
}
.data {
    width: 380px;
    height: 350px;
    background-color: black;
    position: relative;
    top: -300px;
    left: 700px;
    display: flex;
}
.fields {
    width: 30%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-weight: bolder;
    font-size:19px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    box-shadow: -10px -1px 22px 5px black;
}
.values {
    width: 70%;
    height: 100%;
    color: white;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-weight: bolder;
    font-size:19px;
    position: relative;
    padding-left: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.sp1{
    position: absolute;
    display: inline-block;
    top: -20px;
    right: -50px;
    width: 100px;
    height: 100px;
    background-color: white;
    z-index: 12;
    border-radius: 100%;
}
.fa-3x{
    position: relative;
    top: 350px;
    font-size: 90px;
    left: 250px;

}
</style>