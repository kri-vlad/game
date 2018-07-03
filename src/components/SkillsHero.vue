<template>
  <div class="skills-hero">
    <ul class="skills-hero__list">
      <li class="skills-hero__skill" v-bind="currentHeroSkills" @click="keyQ">
        <img :src="currentHeroSkills[0].img"><span class="green"></span><p>Q</p>
      </li>
      <li class="skills-hero__skill" v-bind="currentHeroSkills" @click="keyW">
        <img :src="currentHeroSkills[1].img"><span class="green"></span><p>W</p>
      </li>
      <li class="skills-hero__skill" v-bind="currentHeroSkills" @click="keyE">
        <img :src="currentHeroSkills[2].img"><span class="red"></span><p>E</p>
      </li>
      <li class="skills-hero__skill" @click="switchMyHero"><img src="../assets/img/icon-swap.png" alt=""><p>C</p></li>
    </ul>
  </div>
</template>

<script>
import Mousetrap from '../assets/js/mousetrap.js'

export default ({
  name: 'SkillsHero',
  computed: {
    currentHero () {
      console.log(this.$store.state.summoners.player.currentHero)
      return this.$store.state.summoners.player.currentHero
    },
    currentHeroSkills () {
      let hero = this.$store.state.summoners.player.heroes[this.currentHero].hero
      let heroSkills = this.$store.state.heroes[hero].skills
      let heroSkillsData = []
      heroSkills.forEach(element => {
        heroSkillsData.push(this.$store.state.skills[element])
      })
      console.log(heroSkillsData)
      return heroSkillsData
    }
  },
  methods: {
    keyQ () {
      let effectName = this.currentHeroSkills[0].effectName
      let effectValue = this.currentHeroSkills[0].effectValue
      this.$store.commit(effectName, effectValue)
    },
    keyW () {
      let effectName = this.currentHeroSkills[1].effectName
      let effectValue = this.currentHeroSkills[1].effectValue
      this.$store.commit(effectName, effectValue)
    },
    keyE () {
      let effectName = this.currentHeroSkills[2].effectName
      let effectValue = this.currentHeroSkills[2].effectValue
      this.$store.commit(effectName, effectValue)
    },
    switchMyHero () {
      this.$store.commit('switchMyHero')
    }
  },
  beforeMount () {
    const SkillsHero = this
    Mousetrap.bind(['q', 'й'], function () {
      SkillsHero.keyQ()
      SkillsHero.$root.userAction({id: 0})
    })
    Mousetrap.bind(['w', 'ц'], function () {
      SkillsHero.keyW()
      SkillsHero.$root.userAction({id: 0})
    })
    Mousetrap.bind(['e', 'у'], function () {
      SkillsHero.keyE()
      SkillsHero.$root.userAction({id: 0})
    })
    Mousetrap.bind(['c', 'с'], function () {
      SkillsHero.switchMyHero()
      SkillsHero.$root.userAction({id: 0})
    })
  }
})

</script>

<style scoped>
  .skills-hero {
    width: 440px;
    height: 144px;
  }
  .skills-hero__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-end;
  }
  .skills-hero__skill {
    margin-right: 16px;
    border-radius: 15px;
    background: #242333;
    width: 90px;
    height: 90px;
    position: relative;
    cursor: pointer;
  }
  .skills-hero__skill:last-child {
    margin-left: 30px;
  }
  .skills-hero__skill:last-child::after {
    content: '';
    position: absolute;
    left: -23px;
    bottom: -52px;
    display: block;
    width: 2px;
    height: 93%;
    background: #9d9acc;
    opacity: 0.1;
    cursor: initial;
  }
  .skills-hero__skill img {
    display: block;
    margin: 5px;
    border-radius: 15px;
    width: 80px;
    height: auto;
  }
  .skills-hero__skill span {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;

    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .skills-hero__skill .red {
    background: #242333 url('../assets/img/red-arrow.png') no-repeat center;
  }
  .skills-hero__skill .green {
    background: #242333 url('../assets/img/green-arrow.png') no-repeat center;
  }
  .skills-hero__skill p {
    width: 76px;
    height: 28px;
    border-radius: 16px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    line-height: 28px;
    margin: 0 auto;
    margin-top: 12px;
    font-size: 18px;
  }
</style>
