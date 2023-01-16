<template>
    <div class="body_1">
      <h1>Редагування студента</h1>
      <div>
      </div>
          <form>
                <div class="form_1">
                <input  placeholder="group_id"  v-model="this.group_id" type="text" id="group_id_students" >
                </div>

                <div class="form_1">
                <input v-model="student.name" placeholder="name" type="text" id="name_students" >
                </div>

                <div class="form_1">
                <input v-model="student.email" placeholder="email" type="email" id="email_students" >
                </div>

                <div class="form_1">
                <input v-model="student.phone" placeholder="phone" type="text" id="phone_students" >
                </div>


              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPut()" class="btn_students">Оновити</button>
          <div>
            <ul v-if="errors && errors.length">
                <li v-for="error of errors">
                    {{error.message}}
                </li>
            </ul>
          </div>
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
import { createDOMCompilerError } from '@vue/compiler-dom';
import axios from 'axios';
export default {
  name: "StudentUpdate",
  data() {
    return {
      student: {},
      group_id : ""
    }
  },

  methods: {
    async sendPut() {
          var group;
          try {
          const response = await  axios
            .get(`http://localhost:8080/groups/${this.group_id}`)
            .then((response) => {
                // JSON responses are automatically p arsed.
              group = JSON.stringify(response.data)
            })
            .catch((e) => {
                this.errors.push(e);
            });
          } catch(e)  {
            this.errors.push(e);      
          }
            console.log(group);
            
            
            console.log(JSON.parse(`{ 
                      "name" : "${this.student.name}",
                      "group_id" : ${group}, 
                      "email" : "${this.student.email}",
                      "phone" : "${this.student.phone}"
                    }`));  
            axios
                .put(`http://localhost:8080/students/${this.student.id}`, JSON.parse(`{ 
                      "name" : "${this.student.name}",
                      "group_id" : ${group}, 
                      "email" : "${this.student.email}",
                      "phone" : "${this.student.phone}"
                    }`))
                .then((response) => {})
                .catch((e) => {
                    this.errors.push(e)
                })
                
        }
  },
  created() {
    try {
            
            const response =  axios
                .get(`http://localhost:8080/students/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.student = response.data;
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
                .get(`http://localhost:8080/studentGroup/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.group_id = response.data.id;
                })
                .catch((e) => {
                    this.errors.push(e);
                });
        } 
        catch(e) {
            this.errors.push(e)
        }
  }
}
</script>