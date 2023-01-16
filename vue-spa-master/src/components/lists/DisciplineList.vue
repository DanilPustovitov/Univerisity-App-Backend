<template>
    <div class="body_1">
      <h2>Таблиця дисциплін</h2>
      <router-link to="/createDiscipline" class="btn btn-secondary">Створити нову дисципліну</router-link>
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
                        Видалити
                    </th>
                    <th>
                        Редагувати
                    </th>
                </tr>
            </thead>
            <tbody v-if="disciplines && disciplines.length">
                <tr v-for="discipline of disciplines">
                    <td>
                        {{ discipline.id }}
                    </td>
                    <td>
                        {{ discipline.name }}
                    </td>
                    <td>
                        <button @click="sendDelete(discipline.id)"><img class="ico" src="Images\deleteico.png"/></button>
                    </td>
                    <td>
                        <router-link
                        :to="{
                            name: 'DisciplineUpdate',
                            params: {
                            id: discipline.id
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
  name: "DisciplineList",

  data() {
        return {
                posts: [],
                errors: [],
                disciplines: []
            };
        },

     created() {
        try {
            
        const response =  axios
            .get(`http://localhost:8080/disciplines`)
            .then((response) => {
                // JSON responses are automatically parsed.
                this.disciplines = response.data;
            })
            .catch((e) => {
                this.errors.push(e);
            });
        } catch(e) {
            this.errors.push(e)
        }
    },
    methods: {
        sendDelete(id) {
            try {
            
            const response =  axios
                .delete(`http://localhost:8080/disciplines/${id}`)
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