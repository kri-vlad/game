<template>
  <div class="game-scene">
    <MyBenchHeroes/>
    <MyHeroes/>
    <EnemyHeroes/>
    <EnemyBenchHeroes/>
  </div>
</template>

<script>
import MyBenchHeroes from './MyBenchHeroes'
import EnemyBenchHeroes from './EnemyBenchHeroes'
import MyHeroes from './MyHeroes'
import EnemyHeroes from './EnemyHeroes'

export default {
  name: `GameScene`,
  components: {
    MyBenchHeroes,
    EnemyBenchHeroes,
    MyHeroes,
    EnemyHeroes
  }
}
</script>

<style scoped>
  .game-scene {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 700px;
  }
</style>
