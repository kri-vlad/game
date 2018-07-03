<template>
  <div class="heroes">
    <ul class="heroes__list">
      <li class="heroes__item" v-for="(item, index) in heroes" :key="item.id">
        <img :src="item.model">
        <div class="heroes__hp">
          <div class="heroes__state-hp" v-bind:style="{ width: hpBar(index) + '%'}"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EnemyHeroes',
  computed: {
    heroes () {
      let heroes = this.$store.state.summoners.enemy.heroes
      let heroData = []
      heroes.forEach(element => {
        let hero = element.hero
        heroData.push(this.$store.state.heroes[hero])
      })
      return heroData
    }
  },
  methods: {
    hpBar (id) {
      let hero = this.$store.state.summoners.enemy.heroes[id].hero
      return Math.floor(this.$store.state.summoners.enemy.heroes[id].hp / (this.$store.state.heroes[hero].maxHp / 100))
    }
    // heroPosition (id) {
    //   let positionClasses = ['position-first', 'position-second', 'position-third']
    //   let positionClass = positionClasses[id]
    //   return positionClass
    // }
  }
}
</script>

<style scoped>
  .heroes {
    padding-top: 200px;
    width: 783px;
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
  .heroes__item:nth-child(1) {
    top: -50px;
    right: -70px;
  }
  .heroes__item:nth-child(2) {
    top: -10px;
    right: -110px;
  }
  .heroes__item:nth-child(3) {
    top: 70px;
    right: -50px;
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
