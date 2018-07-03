<template>
  <div class="character-state">
    <div class="character-state__hero">
      <img :src="currentHeroAvatar" :alt="currentHeroName">
    </div>
    <div class="character-state__info">
      <ul class="character-state__list-skill">
        <li class="character-state__skill" v-for="item in currentHeroSkills" :key="item.id">
          <img :src="item.img">
        </li>
      </ul>
      <div class="character-state__fraction"><img src="../assets/img/icon-fraction-01.png"></div>
      <div class="progress-bar"><div class="progress" v-bind:style="{ width: hpBar + '%'}"><span>{{ currentHeroHp }}/{{ currentHeroMaxHp }}</span></div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: `MyStateHero`,
  computed: {
    currentHero () {
      return this.$store.state.summoners.player.currentHero
    },
    currentHeroHp () {
      return this.$store.state.summoners.player.heroes[this.currentHero].hp
    },
    currentHeroMaxHp () {
      let hero = this.$store.state.summoners.player.heroes[this.currentHero].hero
      return this.$store.state.heroes[hero].maxHp
    },
    hpBar () {
      let hero = this.$store.state.summoners.player.heroes[this.currentHero].hero
      return Math.floor(this.$store.state.summoners.player.heroes[this.currentHero].hp / (this.$store.state.heroes[hero].maxHp / 100))
    },
    currentHeroAvatar () {
      let hero = this.$store.state.summoners.player.heroes[this.currentHero].hero
      return this.$store.state.heroes[hero].avatar
    },
    currentHeroName () {
      let hero = this.$store.state.summoners.player.heroes[this.currentHero].hero
      return this.$store.state.heroes[hero].name
    },
    currentHeroSkills () {
      let hero = this.$store.state.summoners.player.heroes[this.currentHero].hero
      let heroSkills = this.$store.state.heroes[hero].skills
      let heroSkillsData = []
      heroSkills.forEach(element => {
        heroSkillsData.push(this.$store.state.skills[element])
      })
      return heroSkillsData
    }
  },
  methods: {
    testPlayer: function (hero, option) {
      console.log(this.$store.state.heroes[hero][option])
    }
  }

}
</script>

<style scoped>
  .character-state {
    box-sizing: border-box;
    padding-top: 10px;
    padding-left: 14px;
    width: 344px;
    height: 110px;
    background: url('../assets/img/my-info-hero.png') no-repeat center;
    background-size: 344px 110px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .character-state__info {
    padding-left: 14px;
    display: flex;
    flex-wrap: wrap;
    width: 230px;
    box-sizing: border-box;
    align-items: center;
  }
  .character-state__hero {
    width: 90px;
    height: 90px;
  }
  .character-state__hero img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .character-state__list-skill {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 5px;
    display: flex;
    align-items: center;
  }
  .character-state__skill {
    margin-right: 10px;
    width: 46px;
    height: 46px;
    background: #29283a;
  }
  .character-state__skill:last-child {
    margin: 0;
  }
  .character-state__skill img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .character-state__fraction {
    width: 46px;
    height: 46px;
    margin-top: 5px;
    margin-left: 10px;
  }
  .character-state__fraction img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .progress-bar {
    width: 208px;
    height: 28px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border-bottom-right-radius: 10px;
    box-sizing: border-box;
    padding: 4px;
    margin-top: 14px;
    position: relative;
  }
  .progress {
    width: 52%;
    height: 100%;
    background: linear-gradient(to right, #3deb6e, #57b9c9);
    border-radius: 5px;
    border-bottom-right-radius: 10px;
    transition: width 0.3s;
  }
  .progress span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
