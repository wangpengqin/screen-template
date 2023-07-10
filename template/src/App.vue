<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
 *{
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
ul li {
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

div {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
