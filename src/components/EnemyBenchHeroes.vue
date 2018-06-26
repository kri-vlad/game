<template>
  <div class="bench-heroes">
    <div class="bench-heroes__wrapper">
      <ul class="bench-heroes__list">
        <li class="bench-heroes__hero"><img src="../assets/hero-lux.jpg" width="74"></li>
        <li class="bench-heroes__hero"><img src="../assets/hero-lux.jpg" width="74"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnemyBenchHeroes',
  data () {

  }
}
</script>

<style scoped>
  .bench-heroes {

    height: 267px;
  }
  .bench-heroes__wrapper {
    width: 100%;
    height: 267px;
    background: url('../assets/bench_right.png') no-repeat center right;
  }
  .bench-heroes__list {
    list-style: none;
    padding: 0;
    padding-top: 27px;
    padding-right: 34px;
    margin: 0;
  }
  .bench-heroes__hero {
    background: url('../assets/bg-hero-bench.png') no-repeat center;
    width: 90px;
    height: 100px;
    display: block;
    padding-top: 8px;
    box-sizing: border-box;

  }
  .bench-heroes__hero:first-child {
    margin-bottom: 12px;
  }
  .bench-heroes__hero img {
    display: block;
    margin: 0 auto;
    border-radius: 12px;
  }
</style>
