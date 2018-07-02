<template>
  <div id="app">
    <TopPanel/>
    <GameScene/>
    <BottomPanel/>
  </div>
</template>

<script>
import TopPanel from './components/TopPanel'
import GameScene from './components/GameScene'
import BottomPanel from './components/BottomPanel'

export default {
  name: 'App',
  components: {
    TopPanel,
    GameScene,
    BottomPanel
  }
}
</script>

<style>
@font-face {
  font-family: 'geomanistbook';
  src: url('./assets/fonts/geomanist-book-webfont.woff2') format('woff2'),
       url('./assets/fonts/geomanist-book-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'geomanistmedium';
  src: url('./assets/fonts/geomanist-medium-webfont.woff2') format('woff2'),
       url('./assets/fonts/geomanist-medium-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: 'geomanistbook', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background:#221f35 url('./assets/img/bg.jpg') no-repeat top center;
  background-position-y: -100px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 1900px;
}

@media (min-height: 900px) {
  #app {
    height: 100vh;
  }
}
@media (min-height: 1100px) {
  #app {
    background-position-y: 0;
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
