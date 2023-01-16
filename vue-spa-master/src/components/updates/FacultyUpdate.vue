<template>
    <div class="body_1">
      <h1>Оновити існуючий факультет</h1>
          <form>

                <div class="form_1">
                <input v-model="faculty.name" placeholder="name" type="text" id="name_faculty" >
                </div>

                <div class="form_1">
                <input v-model="faculty.short_name" placeholder="short_name" type="text" id="short_name_faculty" >
                </div>

              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPut()" value="Надіслати" class="btn_faculty"  >Надіслати</button>
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
  name: "FacultyUpdate",
  data() {
    return {
      faculty: {}
    }
  },
  created() {
    try {
            
            const response =  axios
                .get(`http://localhost:8080/faculties/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.faculty = response.data;
                })
                .catch((e) => {
                    this.errors.push(e);
                });
        } 
        catch(e) {
            this.errors.push(e)
        }
  },
  methods : {
    sendPut() {
      console.log(JSON.parse(`{ 
                  "name" : "${this.faculty.name}",
                  "short_name" : "${this.faculty.short_name}"
                }`));  
        axios
            .put(`http://localhost:8080/faculties/${this.$route.params.id}`, JSON.parse(`{ 
                  "name" : "${this.faculty.name}",
                  "short_name" : "${this.faculty.short_name}"
                }`))
            .then((response) => {})
            .catch((e) => {
                this.errors.push(e)
            })
    }
  }
}
</script>