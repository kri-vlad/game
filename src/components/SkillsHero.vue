<template>
  <div class="skills-hero">
    <ul class="skills-hero__list">
      <li class="skills-hero__skill" @click="damage"><img src="../assets/img/skill-first.jpg" alt=""><span class="green"></span><p>Q</p></li>
      <li class="skills-hero__skill" @click="heal"><img src="../assets/img/icon-heal.jpg" alt=""><span class="green"></span><p>W</p></li>
      <li class="skills-hero__skill"><img src="../assets/img/icon-vampire.jpg" alt=""><span class="red"></span><p>E</p></li>
      <li class="skills-hero__skill"><img src="../assets/img/icon-swap.png" alt=""><p>C</p></li>
    </ul>
  </div>
</template>

<script>
import Mousetrap from '../assets/js/mousetrap.js'

export default ({
  name: 'SkillsHero',
  methods: {
    damage () {
      this.$store.commit('dealDamage', 1000)
    },
    heal () {
      this.$store.commit('healHero', 200)
    }
  },
  beforeMount () {
    const SkillsHero = this
    Mousetrap.bind('q', function () {
      SkillsHero.damage()
    })
    Mousetrap.bind('w', function () {
      SkillsHero.heal()
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
