<template>
  <div class="game-profile  game-profile--my-profile">

    <div class="game-profile__wrapper">
      <div class="game-profile__avatar"><img src="../assets/img/avatar_1.jpg"></div>
      <div class="game-profile__wrapper-text">
        <span class="game-profile__username">Vel</span>
        <span class="game-profile__label">Your Profile</span>
      </div>
      <a href="#" class="game-profile__setting"></a>
      <a href="#" class="game-profile__leave"></a>
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
    width: 404px;
    height: 89px;
    position: relative;
  }
  .game-profile--my-profile::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, #151825, #222733);
    z-index: 1;
    border-top-right-radius: 15px;
  }
  .game-profile--my-profile::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    display: block;
    height: calc(100% + 4px);
    width: 100%;
    background: linear-gradient(to right, #57b9c9, #3deb6e);
    z-index: 0;
    border-top-right-radius: 15px;
  }
  .game-profile__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5;
  }
  .game-profile__avatar {
    box-sizing: border-box;
    padding-left: 24px;
    width: 90px;
    height: 54px;
    position: relative;
  }
  .game-profile__avatar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    background: url('../assets/img/border_avatar_1.png') no-repeat center center;
    height: 54px;
    width: 54px;
  }
  .game-profile__avatar img {
    position: relative;
    z-index: 10;
    width: 44px;
    height: 44px;
    display: block;
    border-radius: 50%;
    margin-top: 5px;
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
    margin-left: auto;
    background: url('../assets/img/icon-setting.png') no-repeat center;
    display: block;
    width: 50px;
    height: 50px;
  }
  .game-profile__leave {
    margin-right: 20px;
    margin-left: 18px;
    background: url('../assets/img/icon-leave.png') no-repeat center;
    display: block;
    width: 50px;
    height: 50px;
  }

</style>
