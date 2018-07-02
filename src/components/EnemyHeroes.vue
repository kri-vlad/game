<template>
  <div class="heroes">
    <ul class="heroes__list">
      <li class="heroes__item  position-first"><img src="../assets/img/model-hero.png"><div class="heroes__hp"><div class="heroes__state-hp" v-bind:style="{ width: stateHp + '%'}"></div></div></li>
      <li class="heroes__item  position-second"><img src="../assets/img/model-hero.png"><div class="heroes__hp"><div class="heroes__state-hp"></div></div></li>
      <li class="heroes__item  position-third"><img src="../assets/img/model-hero.png"><div class="heroes__hp"><div class="heroes__state-hp"></div></div></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EnemyHeroes',
  computed: {
    stateHp () {
      return Math.floor(this.$store.state.summoners.enemy.heroes[0].hp / (this.$store.state.heroes.lux.maxHp / 100))
    }
  }
}
</script>

<style scoped>
  .heroes {
    padding-top: 200px;
    box-sizing: border-box;
  }
  .heroes__list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .heroes__item img {
    transform: scale(-1,1);
  }
  .heroes__item {
    position: relative;
  }
  .heroes__hp {
    border-radius: 5px;
    width: 140px;
    line-height: 17px;
    background: #27363b;
    padding: 3px;
    box-sizing: border-box;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .heroes__state-hp {
    background: linear-gradient(to right, #6d30c8, #d94fc7);
    height: 9px;
    width: 100%;
    border-radius: 3px;
    transition: width 0.3s;
  }
  .position-first {
    top: -50px;
    right: -70px;
  }
  .position-second {
    top: -10px;
    right: -110px;
  }
  .position-third {
    top: 70px;
    right: -50px;
  }
</style>
