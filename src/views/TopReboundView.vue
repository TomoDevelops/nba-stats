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
      playerData: [],
      playerName: [],
      playerRebounds: [],
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
          labels: [],
          datasets: [
            {
              label: `Top Rebounds of ${this.year}`,
              data: [],
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
    }
  }
}
</script>
