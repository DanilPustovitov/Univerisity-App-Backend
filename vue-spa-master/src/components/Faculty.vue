<template>
    <div class="body_1">
      <h1>Створити новий факультет</h1>
          <form>

                <div class="form_1">
                <input v-model="name" placeholder="name" type="text" id="name_faculty" >
                </div>

                <div class="form_1">
                <input v-model="short_name" placeholder="short_name" type="text" id="short_name_faculty" >
                </div>

              <div class="form_1">
              
              </div>
              
          </form>
          <button @click="sendPost()" value="Надіслати" class="btn_faculty"  >Надіслати</button>
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
  name: "Faculty",
  data() {
    return {
      name: "",
      short_name: ""
    }
  },
  methods : {
    sendPost() {
      console.log(JSON.parse(`{ 
                  "name" : "${this.name}",
                  "short_name" : "${this.short_name}"
                }`));  
        axios
            .post(`http://localhost:8080/faculties`, JSON.parse(`{ 
                  "name" : "${this.name}",
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