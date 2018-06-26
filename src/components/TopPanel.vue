<template>
  <div class="top-panel">
    <div class="top-panel__wrapper">
      <GameHistory/>
      <div class="info">
        <span class="info-value">1</span>
        <span class="info-label">Round</span>
      </div>
      <div class="info">
        <span class="info-value">02:53</span>
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
      test_panel: 'Panel'
    }
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
  }
  .info-label {
    font-size: 16px;
    color: #9d9acc;
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
