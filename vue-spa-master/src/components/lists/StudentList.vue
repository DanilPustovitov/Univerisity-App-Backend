<template>
    <div class="body_1">
      <h2>Таблиця студентів</h2>
      <router-link to="/createStudent" class="btn btn-secondary">Створити нового студента</router-link>
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
            <tbody v-if="students && students.length">
                <tr v-for="student of students">
                    <td>
                        {{ student.id }}
                    </td>
                    <td>
                        {{ student.name }}
                    </td>
                    <td>
                        {{ student.email }}
                    </td>
                    <td>
                        {{ student.phone }}
                    </td>
                    <td>
                        <button @click="sendDelete(student.id)"><img class="ico" src="Images\deleteico.png"/></button>
                    </td>
                    <td>
                        <router-link
                        :to="{
                            name: 'StudentUpdate',
                            params: {
                            id: student.id
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
  name: "StudentList",
    methods : {
        sendDelete(id) {
            try {
            
            const response =  axios
                .delete(`http://localhost:8080/students/${id}`)
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
  data() {
        return {
                posts: [],
                errors: [],
                students: []
            };
        },

     created() {
        try {
            
        const response =  axios
            .get(`http://localhost:8080/students`)
            .then((response) => {
                // JSON responses are automatically parsed.
                this.students = response.data;
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