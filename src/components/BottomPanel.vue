<template>
  <div class="bottom-panel">
    <div class="bottom-panel__wrapper">
      <MyProfile/>
      <div class="info">
        <div class="info__list">
          <span class="info-value" v-bind="battleTimer()">{{ minutes }} : {{ seconds }}</span>
          <span class="info-label">Battle Time</span>
        </div>
        <div class="info__list">
          <span class="info-value">1</span>
          <span class="info-label">Round</span>
        </div>
      </div>
      <SkillsHero/>
      <EnemyProfile/>
    </div>
  </div>
</template>

<script>
import MyProfile from './MyProfile'
import EnemyProfile from './EnemyProfile'
import SkillsHero from './SkillsHero'

export default {
  name: 'BottomPanel',
  components: {
    MyProfile,
    EnemyProfile,
    SkillsHero
  },
  data () {
    return {
      minutes: '00',
      seconds: '00'
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
          // console.log(this.seconds)
          if (this.seconds === '59') {
            this.seconds = '00'
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
  }
}
</script>

<style scoped>
  .bottom-panel__wrapper {
    height: 87px;
    background: rgba(26, 24, 40, 0.7);
    box-shadow: 0 -10px 50px 10px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .info {
    width: 334px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info__list {
    display: flex;
    flex-direction: column;
  }
  .info__list:first-child {
    margin-right: 54px;
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
</style>
