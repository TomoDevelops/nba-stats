<template>
  <ul class="grid grid-cols-3 gap-6 py-12">
    <li
      v-for="player in players"
      :key="player.id"
      class="flex items-center justify-center rounded border border-slate-800 py-12"
    >
      {{ player.player_name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    players: Array
  }
}
</script>
