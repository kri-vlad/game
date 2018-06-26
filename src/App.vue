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
  background: url('./assets/bg.jpg') no-repeat top center;
  background-size: 100vw 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
