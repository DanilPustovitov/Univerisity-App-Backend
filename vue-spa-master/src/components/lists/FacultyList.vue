<template>
    <div class="body_1">
      <h2>Таблиця факультетів</h2>
      <router-link class="btn btn-secondary" to="/createFaculty">Створити новий факультет</router-link>
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
                        Абревіатурна назва
                    </th>
                    <th>
                        Видалити
                    </th>
                    <th>
                        Редагувати
                    </th>
                </tr>
            </thead>
            <tbody v-if="faculties && faculties.length">
                <tr v-for="faculty of faculties">
                    <td>
                        {{ faculty.id }}
                    </td>
                    <td>
                        {{ faculty.name }}
                    </td>
                    <td>
                        {{ faculty.short_name }}
                    </td>
                    <td>
                        <button @click="sendDelete(faculty.id)"><img class="ico" src="Images\deleteico.png"/></button>
                    </td>
                    <td>
                        <router-link
                        :to="{
                            name: 'FacultyUpdate',
                            params: {
                            id: faculty.id
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
  name: "FacultyList",

  data() {
        return {
                posts: [],
                errors: [],
                faculties: []
            };
        },

     created() {
        try {
            
        const response =  axios
            .get(`http://localhost:8080/faculties`)
            .then((response) => {
                // JSON responses are automatically parsed.
                this.faculties = response.data;
            })
            .catch((e) => {
                this.errors.push(e);
            });
        } catch(e) {
            this.errors.push(e)
        }
    },
    methods: {
        sendDelete(id){
            try {
            
            const response =  axios
                .delete(`http://localhost:8080/faculties/${id}`)
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