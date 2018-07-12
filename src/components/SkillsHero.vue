<template>
  <div class="skills-hero">
    <ul class="skills-hero__list">
      <li class="skills-hero__skill" v-bind="currentHeroSkills" @click="keyQ">
        <img class="skills-hero__skill-icon" :src="currentHeroSkills[0].img">
        <span class="green"></span>
        <p class="skills-hero__key">Q</p>

        <div class="skills-hero__hover-info">
          <div class="skills-hero__info-top">
            <div class="skills-hero__info-wrapper-img"><img :src="currentHeroSkills[0].img" class="skills-hero__info-img"></div>
            <div class="skills-hero__info-text-top">
              <p class="skills-hero__info-name">{{ currentHeroSkills[0].name }}</p>
              <p class="skills-hero__info-hit-chance"><span>100%</span> Hit Chance</p>
            </div>
            <div class="skills-hero__info-wrapper-img">
              <img src="../assets/img/element_1.png" class="skills-hero__info-element">
              <img src="../assets/img/element_2.png" class="skills-hero__info-element">
            </div>
          </div>
          <p class="skills-hero__info-description">Lorem Ipsum is Ability: 35 of the printing and typesetting industry. Damage: 19</p>
        </div>

      </li>
      <li class="skills-hero__skill" v-bind="currentHeroSkills" @click="keyW">
        <img class="skills-hero__skill-icon" :src="currentHeroSkills[1].img">
        <span class="green"></span>
        <p class="skills-hero__key">W</p>

        <div class="skills-hero__hover-info">
          <div class="skills-hero__info-top">
            <div class="skills-hero__info-wrapper-img"><img :src="currentHeroSkills[1].img" class="skills-hero__info-img"></div>
            <div class="skills-hero__info-text-top">
              <p class="skills-hero__info-name">{{ currentHeroSkills[1].name }}</p>
              <p class="skills-hero__info-hit-chance"><span>100%</span> Hit Chance</p>
            </div>
            <div class="skills-hero__info-wrapper-img">
              <img src="../assets/img/element_1.png" class="skills-hero__info-element">
              <img src="../assets/img/element_2.png" class="skills-hero__info-element">
            </div>
          </div>
          <p class="skills-hero__info-description">Lorem Ipsum is Ability: 35 of the printing and typesetting industry. Damage: 19</p>
        </div>

      </li>
      <li class="skills-hero__skill" v-bind="currentHeroSkills" @click="keyE">
        <img class="skills-hero__skill-icon" :src="currentHeroSkills[2].img">
        <span class="red"></span>
        <p class="skills-hero__key">E</p>

        <div class="skills-hero__hover-info">
          <div class="skills-hero__info-top">
            <div class="skills-hero__info-wrapper-img"><img :src="currentHeroSkills[2].img" class="skills-hero__info-img"></div>
            <div class="skills-hero__info-text-top">
              <p class="skills-hero__info-name">{{ currentHeroSkills[2].name }}</p>
              <p class="skills-hero__info-hit-chance"><span>100%</span> Hit Chance</p>
            </div>
            <div class="skills-hero__info-wrapper-img">
              <img src="../assets/img/element_1.png" class="skills-hero__info-element">
              <img src="../assets/img/element_2.png" class="skills-hero__info-element">
            </div>
          </div>
          <p class="skills-hero__info-description">Lorem Ipsum is Ability: 35 of the printing and typesetting industry. Damage: 19</p>
        </div>

      </li>
      <li class="skills-hero__skill" @click="switchMyHero">
        <img src="../assets/img/icon-swap.png" alt="">
        <p class="skills-hero__key">C</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Mousetrap from '../assets/js/mousetrap.js'

export default ({
  name: 'SkillsHero',
  computed: {
    currentHero () {
      return this.$store.state.summoners.player.currentHero
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
    margin-right: auto;
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
  .skills-hero__skill-icon {
    display: block;
    margin: 5px;
    border-radius: 15px;
    width: 80px;
    height: auto;
  }
  .skills-hero__skill .green,
  .skills-hero__skill .red {
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
  .skills-hero__key {
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

  .skills-hero__skill:hover .skills-hero__hover-info  {
    opacity: 1;
  }

  .skills-hero__hover-info {
    position: absolute;
    bottom: 120px;
    width: 440px;
    background: rgba(28, 27, 42, 0.85);
    border-radius: 16px;
    box-sizing: border-box;
    padding: 12px 16px;
    left: -105px;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .skills-hero__hover-info::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 27px;
    background: url('../assets/img/border_bottom.png') no-repeat center;
  }
  .skills-hero__info-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .skills-hero__info-wrapper-img {
    font-size: 0;
  }
  .skills-hero__info-wrapper-img .skills-hero__info-img {
    width: 51px;
    height: 51px;
    border-radius: 8px;
  }
  .skills-hero__info-description {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 0;
    margin-top: 10px;
  }
  .skills-hero__info-name {
    margin: 0;
    text-align: left;
    font-size: 16px;
  }
  .skills-hero__info-hit-chance {
    margin: 0;
    text-align: left;
    font-size: 16px;
  }
  .skills-hero__info-text-top {
    margin-right: auto;
    margin-left: 10px;
    margin-top: 6px;
  }
  .skills-hero__info-element {
    margin-left: 14px;
  }
</style>
