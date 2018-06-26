<template>
  <div class="skills-hero">
    <ul class="skills-hero__list">
      <li class="skills-hero__skill"><img src="../assets/icon-skill.jpg" alt=""><span class="red"></span><p>Q</p></li>
      <li class="skills-hero__skill"><img src="../assets/icon-skill.jpg" alt=""><span class="green"></span><p>W</p></li>
      <li class="skills-hero__skill"><img src="../assets/icon-skill.jpg" alt=""><span class="green"></span><p>E</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SkillsHero'
}
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
    background: #242333 url('../assets/red-arrow.png') no-repeat center;
  }
  .skills-hero__skill .green {
    background: #242333 url('../assets/green-arrow.png') no-repeat center;
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
