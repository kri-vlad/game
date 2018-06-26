<template>
  <div class="game-scene">
    <MyBenchHeroes/>
    <MyHeroes/>
    <EnemyBenchHeroes/>
  </div>
</template>

<script>
import MyBenchHeroes from './MyBenchHeroes'
import EnemyBenchHeroes from './EnemyBenchHeroes'
import MyHeroes from './MyHeroes'

export default {
  name: `GameScene`,
  components: {
    MyBenchHeroes,
    EnemyBenchHeroes,
    MyHeroes
  }
}
</script>

<style scoped>
  .game-scene {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>
