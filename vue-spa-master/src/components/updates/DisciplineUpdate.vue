<template>
    <div class="body_1">
        <h1>Оновити дисципліну</h1>
          <form>

                <div class="form_1">
                <input v-model="discipline.name" placeholder="name" type="text" id="name_disciplines" >
                </div>

              <div class="form_1">

              </div>
              
          </form>
          <button @click="sendPut()" value="Надіслати" class="btn_disciplines"  >Надіслати</button>
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
  name: "DisciplineUpdate",
  data() {
            return {
                discipline: {},
                errors: []
            }
        },

  created() {
    try {
            
            const response =  axios
                .get(`http://localhost:8080/disciplines/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.discipline = response.data;
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
    sendPut() {  
        console.log(JSON.parse(`{ 
                  "name" : "${this.discipline.name}"
                }`));  
        axios
            .put(`http://localhost:8080/disciplines/${this.$route.params.id}`, JSON.parse(`{ 
                  "name" : "${this.discipline.name}"
                }`))
            .then((response) => {})
            .catch((e) => {
                this.errors.push(e)
            })
            
    }
  }
}
</script>