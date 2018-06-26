<template>
  <div class="bottom-panel">
    <div class="bottom-panel__wrapper">
      <MyProfile/>
      <SkillsHero/>
      <EnemyProfile/>
    </div>
  </div>
</template>

<script>
import MyProfile from './MyProfile'
import EnemyProfile from './EnemyProfile'
import SkillsHero from './SkillsHero'

export default {
  name: 'BottomPanel',
  components: {
    MyProfile,
    EnemyProfile,
    SkillsHero
  }
}
</script>

<style scoped>
  .bottom-panel__wrapper {
    height: 87px;
    background: rgba(36, 32, 57, 0.6);
    box-shadow: 0 -10px 50px 50px rgba(36, 32, 57, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
</style>
