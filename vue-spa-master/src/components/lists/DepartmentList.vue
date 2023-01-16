<template>
    <div class="body_1">
      <h2>Таблиця кафедр</h2>
      <router-link to="/createDepartment" class="btn btn-secondary">Створити нову кафедру</router-link>
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
            <tbody v-if="departments && departments.length">
                <tr v-for="department of departments">
                    <td>
                        {{ department.id }}
                    </td>
                    <td>
                        {{ department.name }}
                    </td>
                    <td>
                        {{ department.short_name }}
                    </td>
                    <td>
                        <button @click="sendDelete(department.id)"><img class="ico" src="Images\deleteico.png"/></button>
                    </td>
                    <td>
                        <router-link
                        :to="{
                            name: 'DepartmentUpdate',
                            params: {
                            id: department.id
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
  name: "DepartmentList",

  data() {
        return {
                posts: [],
                errors: [],
                departments: []
            };
        },

     created() {
        try {
            
        const response =  axios
            .get(`http://localhost:8080/departments`)
            .then((response) => {
                // JSON responses are automatically parsed.
                this.departments = response.data;
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
                .delete(`http://localhost:8080/departments/${id}`)
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