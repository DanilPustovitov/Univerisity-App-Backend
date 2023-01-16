<template>
    <div class="body_1">
      <h2>Таблиця розкладів</h2>
      <router-link to="/createSchedule" class="btn btn-secondary">Створити новий розклад</router-link>
      <div>
        <table class="table table-light">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Назва
                    </th>
                    <th>
                        Час
                    </th>
                    <th>
                        Авдиторія
                    </th>
                    <th>
                        Видалити
                    </th>
                    <th>
                        Редагувати
                    </th>
                </tr>
            </thead>
            <tbody v-if="schedules && schedules.length">
                <tr v-for="schedule of schedules">
                    <td>
                        {{ schedule.id }}
                    </td>
                    <td>
                        {{ schedule.name }}
                    </td>
                    <td>
                        {{ schedule.time }}
                    </td>
                    <td>
                        {{ schedule.classroom }}
                    </td>
                    <td>
                        <button @click="sendDelete(schedule.id)"><img class="ico" src="Images\deleteico.png"/></button>
                    </td>
                    <td>
                        <router-link
                        :to="{
                            name: 'ScheduleUpdate',
                            params: {
                            id: schedule.id
                            }
                        }">
                        Update
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- <ul v-if="students && students.length">
            <li v-for="student of students">
                <p><strong>{{student.name}}</strong></p>
            </li>
        </ul> -->
 
        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
                {{error.message}}
            </li>
        </ul>
    </div>
  </div>
</template>

<style>
.ico {
    width: 20px;
    height: 20px;
}
</style>

<script>
import axios from "axios"


export default {
  name: "ScheduleList",

  data() {
        return {
                posts: [],
                errors: [],
                schedules: []
            };
        },

     created() {
        try {
            
        const response =  axios
            .get(`http://localhost:8080/schedules`)
            .then((response) => {
                // JSON responses are automatically parsed.
                this.schedules = response.data;
            })
            .catch((e) => {
                this.errors.push(e);
            });
        } catch(e) {
            this.errors.push(e)
        }
    },
    methods : {
        sendDelete(id) {
            try {
            
            const response =  axios
                .delete(`http://localhost:8080/schedules/${id}`)
                .then((response) => {
                    // JSON responses are automatically parsed.
                    
                })
                .catch((e) => {
                    this.errors.push(e);
                });
            } catch(e) {
                this.errors.push(e)
            }   
        }
    }
}


</script>