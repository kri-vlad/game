<template>
  <div class="turn-panel">
    <MyStateHero/>
    <div class="turn-panel__wrapper">
      <p class="turn-panel__timer" v-bind="roundTimer()">{{ time }}</p>
      <button class="turn-panel__btn-skip">Skip Turn</button>
    </div>
    <EnemyStateHero/>
  </div>
</template>

<script>
import MyStateHero from './MyStateHero'
import EnemyStateHero from './EnemyStateHero'

export default {
  name: `TurnPanel`,
  data () {
    return {
      time: 30,
      timer: null
    }
  },
  components: {
    MyStateHero,
    EnemyStateHero
  },
  methods: {
    roundTimer () {
      this.timer = setInterval(() => {
        if (this.time > 0) {
          this.time--
          clearInterval(this.timer)
        } else {
          clearInterval(this.timer)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .turn-panel {
    margin: 0 auto;
    width: 1044px;
    height: 96px;
    background: #1d1c2b;
    display: flex;
    justify-content: space-between;
  }
  .turn-panel__timer {
    margin: 0;
    margin-top: 10px;
    font-size: 38px;
    color: white;
  }
  .turn-panel__btn-skip {
    border: 2px solid #9d9acc;
    border-radius: 25px;
    background: #37364c;
    color: white;
    padding: 0 40px;
    line-height: 46px;
    margin-top: 10px;
    font-size: 16px;
    font-family: 'geomanistbook', Helvetica, Arial, sans-serif;
  }
</style>
