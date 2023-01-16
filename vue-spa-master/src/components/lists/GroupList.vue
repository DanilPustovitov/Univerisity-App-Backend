<template>
    <div class="body_1">
      <h2>Таблиця груп</h2>
      <router-link to="/createGroup" class="btn btn-secondary">Створити нову групу</router-link>
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
                        Курс
                    </th>
                    <th>
                        Видалити
                    </th>
                    <th>
                        Редагувати
                    </th>
                </tr>
            </thead>
            <tbody v-if="groups && groups.length">
                <tr v-for="group of groups">
                    <td>
                        {{ group.id }}
                    </td>
                    <td>
                        {{ group.name }}
                    </td>
                    <td>
                        {{ group.course }}
                    </td>
                    <td>
                        <button @click="sendDelete(group.id)"><img class="ico" src="Images\deleteico.png"/></button>
                    </td>
                    <td>
                        <router-link
                        :to="{
                            name: 'GroupUpdate',
                            params: {
                            id: group.id
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
  name: "GroupList",

  data() {
        return {
                posts: [],
                errors: [],
                groups: []
            };
        },

     created() {
        try {
            
        const response =  axios
            .get(`http://localhost:8080/groups`)
            .then((response) => {
                // JSON responses are automatically parsed.
                this.groups = response.data;
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
                .delete(`http://localhost:8080/groups/${id}`)
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