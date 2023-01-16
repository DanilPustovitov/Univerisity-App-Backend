<template>
    <div class="body_1">
      <h1>Редагування викладача</h1>
          <form>

                <div class="form_1">
                <input v-model="teacher.name" placeholder="name" type="text" id="name_teachers" >
                </div>

                <div class="form_1">
                <input v-model="teacher.surname" placeholder="surname" type="text" id="surname_teachers" >
                </div>

                <div class="form_1">
                <input v-model="teacher.email" placeholder="email" type="email" id="email_teachers" >
                </div>

                <div class="form_1">
                <input v-model="teacher.phone" placeholder="phone" type="text" id="phone_teachers" >
                </div>

              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPut()" value="Надіслати" class="btn_teachers"  >Надіслати</button>
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

  name: "TeacherUpdate",
  data(){
    return {
        teacher: {},
        errors: []
    }
  },
  methods: {
        // Pushes Posts to the Server When Called.
        async sendPut() {
        
            console.log(JSON.parse(`{ 
                      "name" : "${this.teacher.name}",
                      "surname" : "${this.teacher.surname}", 
                      "email" : "${this.teacher.email}",
                      "phone" : "${this.teacher.phone}"
                    }`));  
            axios
                .put(`http://localhost:8080/teachers/${this.teacher.id}`, JSON.parse(`{ 
                      "name" : "${this.teacher.name}",
                      "surname" : "${this.teacher.surname}", 
                      "email" : "${this.teacher.email}",
                      "phone" : "${this.teacher.phone}"
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
                .get(`http://localhost:8080/teachers/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.teacher = response.data;
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