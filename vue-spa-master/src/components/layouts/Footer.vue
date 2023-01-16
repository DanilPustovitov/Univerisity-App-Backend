<template>
  <footer>
  <div>
    <h3>СТРУКТУРА</h3>
    <p>Ректорат</p>
    <p>Вчена рада</p>
    <p>Департаменти</p>
  </div>
  <div>
    <h3>МОЖЛИВОСТІ ОСВІТИ</h3>
    <p>Дистанційна освіта</p>
    <p>Академічна мобільність</p>
    <p>Перепідготовка (друга вища освіта)</p>
  </div>
  <div>
    <h3>ДЛЯ КОРИСТУВАЧІВ</h3>
    <p>Школяру</p>
    <p>Вступнику</p>
    <p>Першокурснику</p>
  </div>
</footer>
</template>

<style>
footer {
    display: flex;
    justify-content: space-around;
    padding: 30px;
    color: white;
  }
</style>

<script>
export default {
  name: "Footer"
}
</script>