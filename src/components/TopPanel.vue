<template>
  <div class="top-panel">
    <div class="top-panel__wrapper">
      <TurnPanel/>
    </div>
  </div>
</template>

<script>
import TurnPanel from './TurnPanel'

export default {
  name: 'topPanel',
  components: {
    TurnPanel
  }
}
</script>

<style scoped>

  .top-panel__wrapper {
    display: flex;
    align-items: center;
  }
</style>
