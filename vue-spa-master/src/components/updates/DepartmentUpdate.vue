<template>
    <div class="body_1">
      <h1>Оновити кафедру</h1>
          <form>

                <div class="form_1">
                <input v-model="faculty_id" placeholder="faculty_id" type="text" id="faculty_id_department" >
                </div>

                <div class="form_1">
                <input v-model="department.name" placeholder="name" type="text" id="name_department" >
                </div>

                <div class="form_1">
                <input v-model="department.short_name" placeholder="short_name" type="text" id="short_name_department" >
                </div>

              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPut()" value="Надіслати" class="btn_department"  >Надіслати</button>
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
  name: "DepartmentUpdate",
  data() {
    return {
      department: {},
      faculty_id : "",
      errors: []
    }

  },
  created() {
    try {
            
            const response =  axios
                .get(`http://localhost:8080/departments/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.department = response.data;
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
                .get(`http://localhost:8080/departmentFaculty/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.faculty_id = response.data.id;
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
          var faculty;
          try {
          const response = await  axios
            .get(`http://localhost:8080/faculties/${this.faculty_id}`)
            .then((response) => {
                // JSON responses are automatically p arsed.
              faculty = JSON.stringify(response.data)
            })
            .catch((e) => {
                this.errors.push(e);
            });
          } catch(e)  {
            this.errors.push(e);      
          }
            
            console.log(JSON.parse(`{ 
                      "name" : "${this.department.name}",
                      "faculty_id" : ${faculty}, 
                      "short_name" : "${this.department.short_name}"
                    }`));  
            axios
                .put(`http://localhost:8080/departments/${this.department.id}`, JSON.parse(`{ 
                      "name" : "${this.department.name}",
                      "faculty_id" : ${faculty}, 
                      "short_name" : "${this.department.short_name}"
                    }`))
                .then((response) => {})
                .catch((e) => {
                    this.errors.push(e)
                })
                
        }
  }
}
</script>