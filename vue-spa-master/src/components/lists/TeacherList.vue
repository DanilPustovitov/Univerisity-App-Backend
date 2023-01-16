<template>
    <div class="body_1">
      <h2>Таблиця викладачів</h2>
      <router-link to="/createTeacher" class="btn btn-secondary">Створити нового викладача</router-link>
      <div>
        <table class="table table-light">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Ім'я
                    </th>
                    <th>
                        Прізвище
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Телефон
                    </th>
                    <th>
                        Видалити
                    </th>
                    <th>
                        Редагувати
                    </th>
                </tr>
            </thead>
            <tbody v-if="teachers && teachers.length">
                <tr v-for="teacher of teachers">
                    <td>
                        {{ teacher.id }}
                    </td>
                    <td>
                        {{ teacher.name }}
                    </td>
                    <td>
                        {{ teacher.surname }}
                    </td>
                    <td>
                        {{ teacher.email }}
                    </td>
                    <td>
                        {{ teacher.phone }}
                    </td>
                    <td>
                        <button @click="sendDelete(teacher.id)"><img class="ico" src="Images\deleteico.png"/></button>
                    </td>
                    <td>
                        <router-link
                        :to="{
                            name: 'TeacherUpdate',
                            params: {
                            id: teacher.id
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
  name: "TeacherList",

  data() {
        return {
                posts: [],
                errors: [],
                teachers: []
            };
        },

    methods: {
        sendDelete(id){
            try {
            
            const response =  axios
                .delete(`http://localhost:8080/teachers/${id}`)
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
    },
     created() {
        try {
            
        const response =  axios
            .get(`http://localhost:8080/teachers`)
            .then((response) => {
                // JSON responses are automatically parsed.
                this.teachers = response.data;
            })
            .catch((e) => {
                this.errors.push(e);
            });
        } catch(e) {
            this.errors.push(e)
        }
    }
}


</script>