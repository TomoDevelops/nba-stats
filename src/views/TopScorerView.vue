<template>
  <div class="flex flex-col items-center justify-center py-4 px-10 w-full">
    <h2>Top 20 Scorers in the '22 - '23 Season</h2>
    <canvas id="top-scorer"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  data() {
    return {
      playerDataByScore: [],
      playerName: [],
      playerPoints: [],
      loading: false,
      year: new Date().getFullYear()
    }
  },
  methods: {
    async getPlayerData() {
      this.loading = !this.loading
      try {
        const res = await fetch(
          `https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/${this.year}/`
        )
        const data = await res.json()
        this.playerDataByScore = data.results.slice(0, 20)
        this.getPlayerNamesAndPoints()
        this.initChart()
      } catch (err) {
        console.error(err.message)
      } finally {
        this.loading = false
      }
    },
    getPlayerNamesAndPoints() {
      this.playerDataByScore.map((player) => {
        this.playerName.push(player.player_name)
        this.playerPoints.push(player.PTS)
      })
    },
    initChart() {
      const canvas = document.getElementById('top-scorer')
      new Chart(canvas, {
        type: 'bar',
        data: {
          labels: this.playerName,
          datasets: [
            {
              label: `Top Scorers of ${this.year}`,
              data: this.playerPoints,
              borderWidth: 1
            }
          ]
        },
        options: {
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }
  },
  created() {
    this.getPlayerData()
  }
}
</script>
