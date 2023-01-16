<template>
    <div class="body_1">
      <h1>Оновити розклад</h1>
          <form>

                <div class="form_1">
                <input v-model="schedule.name" placeholder="name" type="text" id="name_schedule" >
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
                <input v-model="schedule.time" placeholder="time" type="time" id="time_schedule" >
                </div>

                <div class="form_1">
                <input v-model="schedule.classroom" placeholder="classroom" type="text" id="classroom_schedule" >
                </div>

              <div class="form_1">
            
              </div>
              
          </form>
          <button @click="sendPut()" value="Надіслати" class="btn_schedule"  >Оновити</button>
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
  name: "ScheduleUpdate",
  data() {
    return {
        schedule: {},
        teacher_id: "",
        discipline_id: "",
        group_id: ""
    }
  },
  created() {
    try {
            
            const response =  axios
                .get(`http://localhost:8080/schedules/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.schedule = response.data;
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
                .get(`http://localhost:8080/scheduleGroup/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.group_id = response.data.id;
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
                .get(`http://localhost:8080/scheduleDiscipline/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.discipline_id = response.data.id;
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
                .get(`http://localhost:8080/scheduleTeacher/${this.$route.params.id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    this.teacher_id = response.data.id;
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
                    "name" : "${this.schedule.name}",
                    "group_id" : ${group}, 
                    "discipline_id" : ${discipline}, 
                    "teacher_id" : ${teacher}, 
                    "time" : "${this.schedule.time}",
                    "classroom" : "${this.schedule.classroom}"
                  }`));  
          axios
              .put(`http://localhost:8080/schedules/${this.$route.params.id}`, JSON.parse(`{ 
                    "name" : "${this.schedule.name}",
                    "group_id" : ${group}, 
                    "discipline_id" : ${discipline}, 
                    "teacher_id" : ${teacher}, 
                    "time" : "${this.schedule.time}",
                    "classroom" : "${this.schedule.classroom}"
                  }`))
              .then((response) => {})
              .catch((e) => {
                  this.errors.push(e)
              })
              
      }
  }
}
</script>