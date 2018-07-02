<template>
  <div class="game-history">
    <div class="game-history__wrapper">
      <div class="game-history__list">
        <div class="game-history__round">
          <span class="game-history__number-round">2</span>
          <ul>
            <li class="game-history__hero  game-history__hero--first-a">
              <svg viewBox="0 0 46 46">
                <linearGradient id="gradient1">
                    <stop offset="0" stop-color="#6d30c8"></stop>
                    <stop offset="100%" stop-color="#d94fc7"></stop>
                </linearGradient>
                <rect stroke="url(#gradient2)" stroke-width="2"
                      width="44" height="44" x="1" y="1"
                      fill="none" rx="10"></rect>
              </svg>
              <img src="../assets/img/hero-zed.jpg" width="46"></li>

            <li class="game-history__hero"><img src="../assets/img/skill-first.jpg" width="46"></li>

            <li class="game-history__hero  game-history__hero--second-b">
              <svg viewBox="0 0 46 46">
                <linearGradient id="gradient2">
                    <stop offset="0" stop-color="#3deb6e"></stop>
                    <stop offset="100%" stop-color="#57b9c9"></stop>
                </linearGradient>
                <rect stroke="url(#gradient1)" stroke-width="2"
                      width="44" height="44" x="1" y="1"
                      fill="none" rx="10"></rect>
              </svg>
              <img src="../assets/img/hero-lux.jpg" width="46"></li>
          </ul>
        </div>
        <div class="game-history__round">
          <span class="game-history__number-round">{{ round }}</span>
          <ul>
            <li class="game-history__hero  game-history__hero--first-b">
              <svg viewBox="0 0 46 46">
                <linearGradient id="gradient1">
                    <stop offset="0" stop-color="#6d30c8"></stop>
                    <stop offset="100%" stop-color="#d94fc7"></stop>
                </linearGradient>
                <rect stroke="url(#gradient1)" stroke-width="2"
                      width="44" height="44" x="1" y="1"
                      fill="none" rx="10"></rect>
              </svg>
              <img src="../assets/img/hero-lux.jpg" width="46"></li>

            <li class="game-history__hero"><img src="../assets/img/skill-lux.jpg" width="46"></li>

            <li class="game-history__hero  game-history__hero--second-a">
              <svg viewBox="0 0 46 46">
                <linearGradient id="gradient2">
                    <stop offset="0" stop-color="#3deb6e"></stop>
                    <stop offset="100%" stop-color="#57b9c9"></stop>
                </linearGradient>
                <rect stroke="url(#gradient2)" stroke-width="2"
                      width="44" height="44" x="1" y="1"
                      fill="none" rx="10"></rect>
              </svg>
              <img src="../assets/img/hero-zed.jpg" width="46"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameHistory',
  data () {
    return {
      round: `1`
    }
  }
}
</script>

<style scoped>
  .game-history {
    max-width: 1252px;
    width: 100%;
  }
  .game-history__wrapper {
    display: flex;
    align-items: center;
    background: #21202f;
    height: 96px;
  }
  .game-history__round {
    display: flex;
    align-items: center;
    margin-right: 20px;
    position: relative;
  }
  .game-history__round::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 2px;
    height: 100%;
    background: #9d9acc;
    opacity: 0.1;
  }
  .game-history__list {
    display: flex;
    padding-left: 20px;
    height: 100%;
  }
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
  }
  li {
    margin-right: 10px;
  }
  .game-history__hero {
    width: 46px;
    height: 46px;
    position: relative;
  }
  .game-history__hero--first-a::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -12px;
    display: block;
    background: #21202f url('../assets/img/a_arrow.png') no-repeat center;
    background-size: 6px 9px;
    width: 16px;
    height: 16px;
    z-index: 10;
    border-radius: 4px;
  }
  .game-history__hero--first-b::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -12px;
    display: block;
    background: #21202f url('../assets/img/b_arrow.png') no-repeat center;
    background-size: 6px 9px;
    width: 16px;
    height: 16px;
    z-index: 10;
    border-radius: 4px;
  }
  .game-history__hero--second-a::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -12px;
    display: block;
    background: #21202f url('../assets/img/a_arrow.png') no-repeat center;
    background-size: 6px 9px;
    width: 16px;
    height: 16px;
    z-index: 10;
    border-radius: 4px;
  }
  .game-history__hero--second-b::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -12px;
    display: block;
    background: #21202f url('../assets/img/b_arrow.png') no-repeat center;
    background-size: 6px 9px;
    width: 16px;
    height: 16px;
    z-index: 10;
    border-radius: 4px;
  }
  .game-history__number-round {
    color: #9d9acc;
    font-size: 14px;
    margin-right: 15px;
    background: #21202f;
    margin-left: -3px;
    padding: 10px 0;
    position: relative;
    z-index: 10;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    border-radius: 10px;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0.8;
  }

</style>
