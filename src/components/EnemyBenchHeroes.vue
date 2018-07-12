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
  .bench-heroes__list {
    width: 69px;
    height: auto;
    position: relative;
    list-style: none;
    padding: 0;
    padding-top: 22px;
    padding-bottom: 22px;
    padding-right: 34px;
    margin: 0;
    margin-bottom: 12px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    box-shadow: -22px -5px 30px -10px rgba(15, 15, 27, 0.7);
    box-sizing: border-box;
  }
  .bench-heroes__list::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 69px;
    background: linear-gradient(to bottom, #1d2331, #191d26);
    z-index: 1;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .bench-heroes__list::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    display: block;
    height: calc(100% + 8px);
    width: 69px;
    background: linear-gradient(to right, #d94fc7, #6d30c8);
    z-index: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
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
  .bench-heroes__hero::before {
    content: '';
    position: absolute;
    background: url('../assets/img/decor-bench.png') no-repeat center;
    width: 11px;
    height: 14px;
    display: block;
    top: 50%;
    right: -34px;
    transform: translateY(-50%);
    z-index: 3;
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
    border-radius: 12px;
    transition: width 0.3s;
    box-shadow: 0 0 0 0 #242333;
  }
</style>
