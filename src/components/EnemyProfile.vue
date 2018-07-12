<template>
  <div class="game-profile  game-profile--enemy-profile">

    <div class="game-profile__wrapper">
      <div class="game-profile__avatar"><img src="" alt=""></div>
      <div class="game-profile__wrapper-text">
        <span class="game-profile__username">Nyashkin</span>
        <span class="game-profile__label">Opponent</span>
      </div>
      <a href="#" class="game-profile__add-friend"></a>
      <a href="#" class="game-profile__options"></a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EnemyProfile'
}
</script>

<style scoped>
  .game-profile {
    width: 404px;
    height: 89px;
    position: relative;
  }
  .game-profile--enemy-profile::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, #2c263c, #171325);
    z-index: 1;
    border-top-left-radius: 15px;
  }
  .game-profile--enemy-profile::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    display: block;
    height: calc(100% + 4px);
    width: 100%;
    background: linear-gradient(to right, #803de3, #d94fc7);
    z-index: 0;
    border-top-left-radius: 15px;
  }
  .game-profile__wrapper {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 4px;
    position: relative;
    z-index: 5;
  }
  .game-profile__avatar {
    width: 90px;
  }
  .game-profile__wrapper-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }
  .game-profile__username {
    font-size: 20px;
    color: white;
  }
  .game-profile__label {
    margin-left: auto;
    font-size: 14px;
    color: #9d9acc;
  }
  .game-profile__options {
    margin-left: 25px;
    background: url('../assets/img/icon-options.png') no-repeat center;
    display: block;
    width: 5px;
    height: 19px;
  }
  .game-profile__add-friend {
    margin-right: auto;
    margin-left: 25px;
    background: url('../assets/img/icon-friend.png') no-repeat center;
    display: block;
    width: 50px;
    height: 50px;
  }
</style>
