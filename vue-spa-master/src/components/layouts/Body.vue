<template>
  <body>
    <main>
      <router-view />
    </main>
    
  </body>
  
</template>

<style>
body {
  display: flex;
    justify-content: space-around;
    padding: 30px;
    color: white;
}

</style>

<script>
export default {
  name: "Body"
}
</script>