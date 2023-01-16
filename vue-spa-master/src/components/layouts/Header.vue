<template>
  <body>
    <header>
  
    <img class="logo_" src="Images\NTUU_KPI_logo.png">

    <div class="barr">
      <router-link to="/">Головна</router-link>
      <router-link to="/schedules">Розклад</router-link>
      <router-link to="/disciplines">Дисципліни</router-link>
      <router-link to="/groups">Групи</router-link>
      <router-link to="/students">Студенти</router-link>
      <router-link to="/teachers">Викладачі</router-link>
      <router-link to="/departments">Кафедри</router-link>
      <router-link to="/faculties">Факультети</router-link>
      <router-link to="/studentlist"></router-link>
    </div>

</header>
  </body>
  
</template>

<style>
header {
    
    display: flex;
    width: 100vw;
    height: 12vw;
    align-items: center;
  
  }

  .logo_ {
    width: 15vh;
    height: 15vh;
    margin: 2vh;
  }
  .barr  {
    width: 100%;
  }
  
.barr a {
    margin: 0.5%;
    color: white;
    text-decoration:none;
  }
</style>


<script>
export default {
  name: "Header"
}
</script>