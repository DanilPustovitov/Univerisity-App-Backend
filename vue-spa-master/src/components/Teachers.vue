<template>
    <div class="body_1">
      <h1>Teachers</h1>
          <form>

                <div class="form_1">
                <input v-model="name" placeholder="name" type="text" id="name_teachers" >
                </div>

                <div class="form_1">
                <input v-model="surname" placeholder="surname" type="text" id="surname_teachers" >
                </div>

                <div class="form_1">
                <input v-model="email" placeholder="email" type="email" id="email_teachers" >
                </div>

                <div class="form_1">
                <input v-model="phone" placeholder="phone" type="text" id="phone_teachers" >
                </div>

              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPost()" value="Надіслати" class="btn_teachers"  >Надіслати</button>
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

  name: "Teachers",
  data(){
    return {
        name: "",
        surname: "",
        email: "",
        phone: "",
       errors: []
    }
  },
  methods: {
        // Pushes Posts to the Server When Called.
        async sendPost() {
        
            console.log(JSON.parse(`{ 
                      "name" : "${this.name}",
                      "surname" : "${this.surname}", 
                      "email" : "${this.email}",
                      "phone" : "${this.phone}"
                    }`));  
            axios
                .post(`http://localhost:8080/teachers`, JSON.parse(`{ 
                      "name" : "${this.name}",
                      "surname" : "${this.surname}", 
                      "email" : "${this.email}",
                      "phone" : "${this.phone}"
                    }`))
                .then((response) => {})
                .catch((e) => {
                    this.errors.push(e)
                })
                
        }
      }
}
</script>