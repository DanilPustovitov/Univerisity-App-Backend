<template>
    <div class="body_1">
      <h1>Створення студента</h1>
      <div>
      </div>
          <form>

                <div class="form_1">
                <input  placeholder="group_id" v-model="group_id" type="text" id="group_id_students" >
                </div>

                <div class="form_1">
                <input v-model="name" placeholder="name" type="text" id="name_students" >
                </div>

                <div class="form_1">
                <input v-model="email" placeholder="email" type="email" id="email_students" >
                </div>

                <div class="form_1">
                <input v-model="phone" placeholder="phone" type="text" id="phone_students" >
                </div>


              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPost()" class="btn_students"  >Надіслати</button>
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
import axios from 'axios';
export default {
  name: "Students",
  data() {
            return {
                group_id: "",
                name: "",
                email: "",
                phone: "",
                postBody: "{\"name\" : \""+this.name+"\",\"group_id\" : "+this.group+",\"email\" : \""+this.email+"\",\"phone\" : \""+this.phone+"\"}",
                errors: []
            }
        },
    
    methods: {
        // Pushes Posts to the Server When Called.
        async sendPost() {
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
                      "name" : "${this.name}",
                      "group_id" : ${group}, 
                      "email" : "${this.email}",
                      "phone" : "${this.phone}"
                    }`));  
            axios
                .post(`http://localhost:8080/students`, JSON.parse(`{ 
                      "name" : "${this.name}",
                      "group_id" : ${group}, 
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