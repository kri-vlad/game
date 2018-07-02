<template>
  <div class="game-profile">

    <div class="game-profile__wrapper  game-profile__wrapper--my-profile">
      <div class="game-profile__avatar"><img src="" alt=""></div>
      <div class="game-profile__wrapper-text">
        <span class="game-profile__username">Vel</span>
        <span class="game-profile__label">Your Profile</span>
      </div>
      <a href="#" class="game-profile__setting"></a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyProfile'
}
</script>

<style scoped>
  .game-profile {
    width: 355px;
    height: 93px;
  }
  .game-profile__wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    padding-top: 4px;
  }
  .game-profile__wrapper--my-profile {
    background: url('../assets/img/bg_myprofile.png') no-repeat;
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
    font-size: 14px;
    color: #9d9acc;
  }
  .game-profile__setting {
    margin-right: 20px;
    margin-left: auto;
    background: url('../assets/img/icon-setting.png') no-repeat center;
    display: block;
    width: 50px;
    height: 50px;
  }

</style>
