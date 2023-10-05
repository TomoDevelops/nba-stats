<template>
  <div class="flex flex-col items-center justify-center w-full">
    <h2>Top 20 Scorers in the '22 - '23 Season</h2>
    {{ this.playerDataByScore }}
    <canvas id="top-scorer"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerDataByScore: [],
      loading: false,
      year: new Date().getFullYear()
    }
  },
  methods: {
    async getPlayerData() {
      this.loading = !this.loading
      this.playerDataByScore = await fetch(
        `https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/${this.year}/`
      )
        .then((data) => data.json())
        .then((res) => res.results.slice(0, 20))
        .catch((err) => console.error(err.message))
        .finally(() => (this.loading = !this.loading))
    }
  },
  created() {
    this.getPlayerData()
  }
}
</script>
