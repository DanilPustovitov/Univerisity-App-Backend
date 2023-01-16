<template>
    <div class="body_1">
      <h1>Створити групу</h1>
          <form>

                <div class="form_1">
                <input v-model="department_id" placeholder="department_id" type="text" id="department_id_group" >
                </div>

                <div class="form_1">
                <input v-model="name" placeholder="name" type="text" id="name_group" >
                </div>

                <div class="form_1">
                <input v-model="course" placeholder="course" type="text" id="course_group" >
                </div>

              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPost()" value="Надіслати" class="btn_group"  >Надіслати</button>
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
  name: "Group",
  data() {
    return {
      department_id: "",
      name: "",
      course : ""
    }
  },
  methods: {
    async sendPost() {
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
                      "name" : "${this.name}",
                      "department_id" : ${department}, 
                      "course" : "${this.course}"
                    }`));  
            axios
                .post(`http://localhost:8080/groups`, JSON.parse(`{ 
                      "name" : "${this.name}",
                      "department_id" : ${department}, 
                      "course" : "${this.course}"
                    }`))
                .then((response) => {})
                .catch((e) => {
                    this.errors.push(e)
                })
                
        }
  }
}
</script>