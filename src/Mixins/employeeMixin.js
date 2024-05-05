const employeeMixin = {

        data() {
            return {
                Employees:[],
                
            }
        },
        methods: {
            allEmployees() {
                for (let index = 0; index < 10; index++) {
                    const element = {
                        id : index ,
                        name: 'user '+index,
                        profile : 'ref ' +index + ' JAVA',
                    }
                    this.Employees.push(element)
                    
                }
         },
    
        },
        components: {
            
        },
        mounted() {
            this.allEmployees()
        }
 }

 export default employeeMixin;
