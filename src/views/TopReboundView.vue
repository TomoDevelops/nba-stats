<template>
  <div class="flex flex-col items-center justify-center py-4 px-10 w-full">
    <h2>Top 20 Rebounds in the '22 - '23 Season</h2>
    <canvas id="top-rebound"></canvas>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto'

export default {
  data() {
    return {
      playerDataByRebound: [],
      playerData: [],
      playerName: [],
      playerORebounds: [],
      playerDRebounds: [],
      loading: false,
      year: new Date().getFullYear()
    }
  },
  methods: {
    initChart() {
      const canvas = document.getElementById('top-rebound')
      new Chart(canvas, {
        type: 'bar',
        data: {
          labels: this.playerData.map((player) => player.name),
          datasets: [
            {
              label: `Top Rebounds of ${this.year}`,
              data: this.playerData.map((player) => player.totalRebounds),
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: { beginAtZero: true }
          }
        }
      })
    },
    getPlayerNamesAndRebounds(data) {
      data.results.slice(0, 20).map((player) => {
        let newPlayer = {}
        newPlayer.name = player.player_name
        newPlayer.totalRebounds = player.ORB + player.DRB
        newPlayer.ORB = player.ORB
        newPlayer.DRB = player.DRB
        this.playerData.push(newPlayer)
      })
    }
  },
  async created() {
    this.loading = !this.loading
    try {
      const res = await fetch(
        `https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/${this.year}/`
      )
      const data = await res.json()
      this.getPlayerNamesAndRebounds(data)
      this.initChart()
    } catch (err) {
      console.error(err.message)
    } finally {
      this.loading = !this.loading
    }
  }
}
</script>
