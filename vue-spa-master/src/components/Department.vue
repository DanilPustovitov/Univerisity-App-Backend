<template>
    <div class="body_1">
      <h1>Department</h1>
          <form>

                <div class="form_1">
                <input v-model="faculty_id" placeholder="faculty_id" type="text" id="faculty_id_department" >
                </div>

                <div class="form_1">
                <input v-model="name" placeholder="name" type="text" id="name_department" >
                </div>

                <div class="form_1">
                <input v-model="short_name" placeholder="short_name" type="text" id="short_name_department" >
                </div>

              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPost()" value="Надіслати" class="btn_department"  >Надіслати</button>
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
  name: "Department",
  data() {
    return {
      faculty_id: "",
      name: "",
      short_name: "",
      errors: []
    }

  },
  methods: {
    async sendPost() {
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
                      "name" : "${this.name}",
                      "faculty_id" : ${faculty}, 
                      "short_name" : "${this.short_name}"
                    }`));  
            axios
                .post(`http://localhost:8080/departments`, JSON.parse(`{ 
                      "name" : "${this.name}",
                      "faculty_id" : ${faculty}, 
                      "short_name" : "${this.short_name}"
                    }`))
                .then((response) => {})
                .catch((e) => {
                    this.errors.push(e)
                })
                
        }
  }
}
</script>