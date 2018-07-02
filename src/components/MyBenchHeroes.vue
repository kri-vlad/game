<template>
  <div class="bench-heroes">
    <div class="bench-heroes__wrapper">
      <ul class="bench-heroes__list">
        <li class="bench-heroes__hero"><div class="bench-heroes__state-hp"></div><img src="../assets/img/hero-lux.jpg" width="74"></li>
        <li class="bench-heroes__hero"><div class="bench-heroes__state-hp"></div><img src="../assets/img/hero-annie.jpg" width="74"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyBenchHeroes'
}
</script>

<style scoped>
  .bench-heroes {
    width: 69px;
    height: 267px;
  }
  .bench-heroes__wrapper {
    width: 100%;
    height: 267px;
    background: url('../assets/img/bench_left.png') no-repeat center;
  }
  .bench-heroes__list {
    list-style: none;
    padding: 0;
    padding-top: 27px;
    padding-left: 34px;
    margin: 0;
  }
  .bench-heroes__hero {
    border-radius: 12px;
    width: 90px;
    height: 100px;
    display: block;
    padding-top: 8px;
    box-sizing: border-box;
    position: relative;
    background: #242333;
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
  .bench-heroes__hero:first-child {
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
  .bench-heroes__state-hp {
    position: absolute;
    z-index: 1;
    bottom: 4px;
    background: linear-gradient(to right, #3deb6e, #57b9c9);
    transform: scale(0.9, 0.9);
    height: 15px;
    width: 100%;
    border-radius: 3px;
    transition: width 0.3s;
    box-shadow: 0 0 0 0 #242333;
  }
</style>
