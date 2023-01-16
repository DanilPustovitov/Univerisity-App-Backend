<template>
      <div class="body_1">
        <h1>Створити новий розклад</h1>
            <form>

                  <div class="form_1">
                  <input v-model="name" placeholder="name" type="text" id="name_schedule" >
                  </div>

                  <div class="form_1">
                  <input v-model="teacher_id" placeholder="teacher_id" type="text" id="teacher_id_schedule" >
                  </div>

                  <div class="form_1">
                  <input v-model="discipline_id" placeholder="discipline_id" type="text" id="discipline_id_schedule" >
                  </div>

                  <div class="form_1">
                  <input v-model="group_id" placeholder="group_id" type="text" id="group_id_schedule" >
                  </div>

                  <div class="form_1">
                  <input v-model="time" placeholder="time" type="time" id="time_schedule" >
                  </div>

                  <div class="form_1">
                  <input v-model="classroom" placeholder="classroom" type="text" id="classroom_schedule" >
                  </div>

                <div class="form_1">
              
                </div>
                
            </form>
            <button @click="sendPost()" value="Надіслати" class="btn_schedule"  >Надіслати</button>
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
    name: "Shedule",
    data() {
      return {
          name: "",
          time: "",
          classroom: "",
          teacher_id: "",
          discipline_id: "",
          group_id: ""
      }
    },
    methods: {
      async sendPost() {
        //GROUP
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
          //TEACHER
          var teacher;
          try {
          const response = await  axios
            .get(`http://localhost:8080/teachers/${this.teacher_id}`)
            .then((response) => {
                // JSON responses are automatically p arsed.
              teacher = JSON.stringify(response.data)
            })
            .catch((e) => {
                this.errors.push(e);
            });
          } catch(e)  {
            this.errors.push(e);      
          }
            console.log(teacher);

            //DISCIPLINE
            var discipline;
          try {
          const response = await  axios
            .get(`http://localhost:8080/disciplines/${this.discipline_id}`)
            .then((response) => {
                // JSON responses are automatically p arsed.
              discipline = JSON.stringify(response.data)
            })
            .catch((e) => {
                this.errors.push(e);
            });
          } catch(e)  {
            this.errors.push(e);      
          }
            console.log(discipline);
            
            
            console.log(JSON.parse(`{ 
                      "name" : "${this.name}",
                      "group_id" : ${group}, 
                      "discipline_id" : ${discipline}, 
                      "teacher_id" : ${teacher}, 
                      "time" : "${this.time}",
                      "classroom" : "${this.classroom}"
                    }`));  
            axios
                .post(`http://localhost:8080/schedules`, JSON.parse(`{ 
                      "name" : "${this.name}",
                      "group_id" : ${group}, 
                      "discipline_id" : ${discipline}, 
                      "teacher_id" : ${teacher}, 
                      "time" : "${this.time}",
                      "classroom" : "${this.classroom}"
                    }`))
                .then((response) => {})
                .catch((e) => {
                    this.errors.push(e)
                })
                
        }
    }
  }
  </script>