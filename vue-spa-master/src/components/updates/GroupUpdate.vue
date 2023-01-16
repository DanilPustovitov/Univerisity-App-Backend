<template>
    <div class="body_1">
      <h1>Оновити групу</h1>
          <form>

                <div class="form_1">
                <input v-model="department_id" placeholder="department_id" type="text" id="department_id_group" >
                </div>

                <div class="form_1">
                <input v-model="group.name" placeholder="name" type="text" id="name_group" >
                </div>

                <div class="form_1">
                <input v-model="group.course" placeholder="course" type="text" id="course_group" >
                </div>

              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPut()" value="Надіслати" class="btn_group"  >Надіслати</button>
  </div>
</template>

<style>
.body_1 {
 
 display: flex;
 flex-direction: column;
 text-align: center;
 padding: 100px;
 color: white;
}
.form_1{
margin: 10px;
}

</style>

<script>
import axios from 'axios';

export default {
  name: "GroupUpdate",
  data() {
    return {
      department_id: "",
      group: {}
    }
  },
  created() {
    try {
            
            const response =  axios
                .get(`http://localhost:8080/groups/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.group = response.data;
                })
                .catch((e) => {
                    this.errors.push(e);
                });
        } 
        catch(e) {
            this.errors.push(e)
        }
        try {
            
            const response =  axios
                .get(`http://localhost:8080/groupDepartment/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.department_id = response.data.id;
                })
                .catch((e) => {
                    this.errors.push(e);
                });
        } 
        catch(e) {
            this.errors.push(e)
        }
  },
  methods: {
    async sendPut() {
        var department;
          try {
          const response = await  axios
            .get(`http://localhost:8080/departments/${this.department_id}`)
            .then((response) => {
                // JSON responses are automatically p arsed.
              department = JSON.stringify(response.data)
            })
            .catch((e) => {
                this.errors.push(e);
            });
          } catch(e)  {
            this.errors.push(e);      
          }
            
            console.log(JSON.parse(`{ 
                      "name" : "${this.group.name}",
                      "department_id" : ${department}, 
                      "course" : "${this.group.course}"
                    }`));  
            axios
                .put(`http://localhost:8080/groups/${this.$route.params.id}`, JSON.parse(`{ 
                      "name" : "${this.group.name}",
                      "department_id" : ${department}, 
                      "course" : "${this.group.course}"
                    }`))
                .then((response) => {})
                .catch((e) => {
                    this.errors.push(e)
                })
                
        }
  }
}
</script>