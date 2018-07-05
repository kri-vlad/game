<template>
  <div class="bench-heroes">
    <div class="bench-heroes__wrapper">
      <ul class="bench-heroes__list">
        <li class="bench-heroes__hero" v-for="(item, index) in heroes" :key="item.id">
          <div class="bench-heroes__state-hp" v-bind:style="{ width: hpBar(index) + '%'}"></div>
          <img :src="item.avatar" width="74">
        </li>
        <li class="bench-heroes__hero  bench-heroes__hero--died" v-for="item in deadHeroes" :key="item.id">
          <div class="bench-heroes__state-hp" style="width: 0"></div>
          <img :src="item.avatar" width="74">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnemyBenchHeroes',
  computed: {
    currentHero () {
      return this.$store.state.summoners.enemy.currentHero
    },
    heroes () {
      let heroes = this.$store.state.summoners.enemy.heroes
      let heroData = []
      heroes.forEach((element, index) => {
        let hero = element.hero
        if (!(element.hp === 0)) {
          if (!(index === this.currentHero)) {
            heroData.push(this.$store.state.heroes[hero])
          }
        }
      })
      return heroData
    },
    deadHeroes () {
      let heroes = this.$store.state.summoners.enemy.heroes
      let heroData = []
      heroes.forEach((element, index) => {
        let hero = element.hero
        if (element.hp === 0) {
          heroData.push(this.$store.state.heroes[hero])
        }
      })
      return heroData
    }
  },
  methods: {
    hpBar (id) {
      let heroes = this.$store.state.summoners.enemy.heroes
      let heroData = []
      heroes.forEach((element, index) => {
        if (!(index === this.currentHero)) {
          if (!(element.hp === 0)) {
            heroData.push(element)
          }
        }
      })
      let hero = heroData[id].hero
      return Math.floor(heroData[id].hp / (this.$store.state.heroes[hero].maxHp / 100))
    }
  }
}
</script>

<style scoped>
  .bench-heroes {
    width: 69px;
    height: 267px;
  }
  .bench-heroes__wrapper {
    width: 100%;
    height: 267px;
    background: url('../assets/img/bench_right.png') no-repeat center right;
  }
  .bench-heroes__list {
    list-style: none;
    padding: 0;
    padding-top: 27px;
    padding-right: 34px;
    margin: 0;
    margin-bottom: 12px;
  }
  .bench-heroes__hero {
    border-radius: 12px;
    width: 90px;
    height: 100px;
    display: block;
    padding-top: 8px;
    box-sizing: border-box;
    margin-left: -55px;
    position: relative;
    background: #242333;
  }
  .bench-heroes__hero::after {
    content: '';
    position: absolute;
    background: url('../assets/img/bg-hero-bench.png') no-repeat center;
    border-radius: 12px;
    width: 90px;
    height: 100px;
    display: block;
    top: 0;
    z-index: 2;
  }
  .bench-heroes__hero:not(:last-child) {
    margin-bottom: 12px;
  }
  .bench-heroes__hero img {
    position: relative;
    z-index: 3;
    display: block;
    margin: 0 auto;
    border-radius: 12px;
    box-shadow: 0 0 0 3px rgba(31, 30, 44, 0.7);
  }
  .bench-heroes__hero--died img {
    filter: grayscale(100%);
  }
  .bench-heroes__state-hp {
    position: absolute;
    z-index: 1;
    bottom: 4px;
    background: linear-gradient(to right, #803de3, #d94fc7);
    transform: scale(0.9, 0.9);
    height: 15px;
    width: 100%;
    border-radius: 3px;
    transition: width 0.3s;
    box-shadow: 0 0 0 0 #242333;
  }
</style>
