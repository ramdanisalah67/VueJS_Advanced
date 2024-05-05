import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router)
app.mount('#app')

app.directive("changeColor",(el,order) => {
    el.style.color = order.value
})
app.directive("blockSubmit",(el)=>{
 
        el.addEventListener('submit',function(e){
            e.preventDefault();
        })
    }
)