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
  name: 'MyHeroes',
  computed: {
    heroes () {
      let heroes = this.$store.state.summoners.player.heroes
      let heroData = []
      heroes.forEach(element => {
        let hero = element.hero
        if (!(element.hp === 0)) {
          heroData.push(this.$store.state.heroes[hero])
        }
      })
      return heroData
    },
    livingHeroes () {
      let heroes = this.$store.state.summoners.player.heroes
      let heroData = []
      heroes.forEach(element => {
        if (!(element.hp === 0)) {
          heroData.push(element)
        }
      })
      return heroData
    }
  },
  methods: {
    hpBar (id) {
      let heroes = this.livingHeroes
      let hero = heroes[id].hero
      return Math.floor(this.livingHeroes[id].hp / (this.$store.state.heroes[hero].maxHp / 100))
    }
  },
  beforeUpdate () {
    this.$store.commit('switchDeadHero')
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
    flex-direction: row-reverse;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .heroes__item {
    position: relative;
  }
  .heroes__item:nth-child(1) {
    top: -50px;
    left: -70px;
  }
  .heroes__item:nth-child(2){
    top: -10px;
    left: -110px;
  }
  .heroes__item:nth-child(3) {
    top: 70px;
    left: -50px;
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
    background: linear-gradient(to right, #3deb6e, #57b9c9);
    height: 9px;
    width: 100%;
    border-radius: 3px;
    transition: width 0.3s;
  }
  .position-first {
    top: -50px;
    left: -70px;
  }
  .position-second {
    top: -10px;
    left: -110px;
  }
  .position-third {
    top: 70px;
    left: -50px;
  }
</style>
