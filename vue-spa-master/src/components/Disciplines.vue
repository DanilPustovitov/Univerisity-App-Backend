<template>
    <div class="body_1">
        <h1>Створити нову дисципліну</h1>
          <form>

                <div class="form_1">
                <input v-model="name" placeholder="name" type="text" id="name_disciplines" >
                </div>

              <div class="form_1">

              </div>
              
          </form>
          <button @click="sendPost()" value="Надіслати" class="btn_disciplines"  >Надіслати</button>
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
  name: "Disciplines",
  data() {
            return {
                name: "",
                errors: []
            }
        },
  methods: {
    sendPost() {  
        console.log(JSON.parse(`{ 
                  "name" : "${this.name}"
                }`));  
        axios
            .post(`http://localhost:8080/disciplines`, JSON.parse(`{ 
                  "name" : "${this.name}"
                }`))
            .then((response) => {})
            .catch((e) => {
                this.errors.push(e)
            })
            
    }
  }
}
</script>