<template>
  <div class="top-panel">
    <div class="top-panel__wrapper">
      <GameHistory/>
      <div class="info">
        <span class="info-value">1</span>
        <span class="info-label">Round</span>
      </div>
      <div class="info">
        <span class="info-value" v-bind="battleTimer()">{{ minutes }} : {{ seconds }}</span>
        <span class="info-label">Battle Time</span>
      </div>
      <button class="surrender">Surrender</button>
    </div>
    <TurnPanel/>
  </div>
</template>

<script>
import GameHistory from './GameHistory'
import TurnPanel from './TurnPanel'

export default {
  name: 'topPanel',
  components: {
    GameHistory,
    TurnPanel
  },
  data () {
    return {
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    battleTimer () {
      function pad (num, size) {
        let s = '00' + num
        return s.substr(s.length - size)
      }

      let timerSecond = setInterval(() => {
        if (this.seconds >= 0) {
          if (this.seconds === 19) {
            this.seconds = 0
            this.minutes++
            this.minutes = pad(this.minutes, 2)
          } else {
            this.seconds++
            this.seconds = pad(this.seconds, 2)
          }
          clearInterval(timerSecond)
        } else {
          clearInterval(timerSecond)
        }
      }, 1000)
    }
    // formatTime () {

    // function pad (num, size) {
    //   let s = '0000' + num
    //   return s.substr(s.length - size)
    // }
    // this.hours = Math.floor(this.time / (60 * 60 * 1000))
    // this.time = this.time % (60 * 60 * 1000)
    // this.minutes = Math.floor(this.time / (60 * 1000))
    // this.time = this.time % (60 * 1000)
    // this.seconds = Math.floor(this.time / 1000)
    // console.log(this.seconds)

    // console.log(this.time)

    // this.newTime = pad(this.hours, 2) + ':' + pad(this.minutes, 2) + ':' + pad(this.seconds, 2)

    // moment(this.time).format()
    // }
  }
}
</script>

<style scoped>
  .info {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
  .info-value {
    font-size: 24px;
    width: 80px;
    text-align: left;
  }
  .info-label {
    font-size: 16px;
    color: #9d9acc;
    text-align: left;
  }
  .top-panel__wrapper {
    display: flex;
    align-items: center;
    background: #29283a;
    height: 96px;
  }
  .surrender {
    margin-left: auto;
    margin-right: 30px;
    border-radius: 25px;
    border: 2px solid #9d9acc;
    text-align: center;
    font-size: 16px;
    background: rgba(54, 53, 76, 0.3);
    color: white;
    line-height: 44px;
    width: 155px;
    box-sizing: border-box;
    font-family: 'geomanistbook', Helvetica, Arial, sans-serif;
  }
</style>
