<template>
  <div class="game-profile">

    <div class="game-profile__wrapper  game-profile__wrapper--enemy-profile">
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
    width: 355px;
    height: 93px;
  }
  .game-profile__wrapper {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    padding-top: 4px;
  }
  .game-profile__wrapper--enemy-profile {
    background: url('../assets/img/bg_enemyprofile.png') no-repeat;
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
